"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_config_1 = __importDefault(require("./config/app.config"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const colors_1 = __importDefault(require("colors"));
dotenv_1.default.config();
// connect DB
(0, db_1.default)();
// Defining Port
const PORT = process.env.PORT;
app_config_1.default.listen(PORT, () => {
    console.log(colors_1.default.cyan.bold.underline(`Server is running successfully on port ${PORT}`));
});
