"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = void 0;
const user_model_1 = __importDefault(require("./../models/user.model"));
const bcrypt_1 = __importStar(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const registerUser = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const salt = await (0, bcrypt_1.genSalt)(10);
        password = await bcrypt_1.default.hash(password, salt);
        const newUser = new user_model_1.default({ email, password, username });
        await newUser.save();
        res.status(200).json({
            error: false,
            message: "User created successfully",
            data: { ...newUser, password: undefined },
        });
        return;
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ error: true, message: `internal server error`, data: null });
    }
};
exports.default = registerUser;
const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        // first email is mail in db, second mail is mail passed by user
        const user = await user_model_1.default.findOne({ email: email });
        if (!user) {
            throw new Error("User not found");
        }
        const isPassword = bcrypt_1.default.compare(password, user.password);
        if (!isPassword) {
            throw new Error("Invalid");
        }
        // Generate JWT token and return response
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.send({ error: false, message: "Log in successful", data: token });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "an error occured", data: null, error: true });
    }
};
exports.logIn = logIn;
