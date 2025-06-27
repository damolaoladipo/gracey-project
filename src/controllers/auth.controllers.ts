// Register, LogIn
import { Request, Response } from "express";
import User from "./../models/user.model";
import bcrypt, { genSalt } from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req: Request, res: Response) => {
  try {
    let { username, email, password } = req.body;
    const salt = await genSalt(10);
    password = await bcrypt.hash(password, salt);
    const newUser = new User({ email, password, username });
    await newUser.save();
    res.status(200).json({
      error: false,
      message: "User created successfully",
      data: { ...newUser, password: undefined },
    });
    return;
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: true, message: `internal server error`, data: null });
  }
};
export default registerUser;

export const logIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    // first email is mail in db, second mail is mail passed by user
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User not found");
    }
    const isPassword = bcrypt.compare(password, user.password);
    if (!isPassword) {
      throw new Error("Invalid");
    }
    // Generate JWT token and return response
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );
    res.send({ error: false, message: "Log in successful", data: token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "an error occured", data: null, error: true });
  }
};
