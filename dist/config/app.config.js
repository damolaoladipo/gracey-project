"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const note_routes_1 = __importDefault(require("../routes/note.routes"));
const auth_routes_1 = __importDefault(require("../routes/auth.routes"));
// creating express app
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "50mb" }));
app.use("/api/notes", note_routes_1.default);
app.use("/api/auth", auth_routes_1.default);
exports.default = app;
