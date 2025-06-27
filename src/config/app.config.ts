import express from "express";
import cors from "cors";
import noteRoutes from "../routes/note.routes";
import authRoutes from "../routes/auth.routes";

// creating express app
const app = express();
app.use(cors())
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/notes", noteRoutes);
app.use("/api/auth", authRoutes);

export default app;
