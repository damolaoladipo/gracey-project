"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const colors_1 = __importDefault(require("colors"));
// connecting to Database
const connectDB = async () => {
    try {
        const connect = await mongoose_1.default.connect(process.env.MONGODB_URL);
        console.log(colors_1.default.green.bold.underline("MongoDB connected!"));
    }
    catch (error) {
        console.log(colors_1.default.red.bold.underline("Error! Connection failed"));
    }
};
exports.default = connectDB;
