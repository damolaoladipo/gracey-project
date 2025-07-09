import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import noteRoutes from "../routes/note.routes";
import authRoutes from "../routes/auth.routes";

// creating express app
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/notes", noteRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    error: false,
    errors: [],
    data: {
      name: "Note App API",
      version: "1.0.0",
    },
    message: `Note App", API v1.0.0 is running on production`,
    status: 200,
  });

  console.log("Health check endpoint hit");
});

export default app;
