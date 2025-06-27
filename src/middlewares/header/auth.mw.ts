import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: string;
}

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    res.status(400).json({
      error: true,
      message: "Please provide token, authorization denied",
      data: null,
    });
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    req.user = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: true, message: "Invalid token", data: null });
  }
};
