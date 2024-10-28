import express from "express";
import app from "../config/app.config";
import bodyParser from "body-parser";
import Note from "../models/notes";
import {
  createCategories,
  createNotes,
  deleteNote,
  getNote,
  getNotes,
  updateNote,
} from "./../controllers/route.controller";

const router = express.Router();

router.post("/api/notes", createNotes);
router.get("/api/notes", getNotes);
router.get("/api/notes/:id", getNote);
router.delete("/api/notes/:id", deleteNote);
router.put("/api/notes/:id", updateNote);
router.post("api/categories", createCategories);

export default router;
