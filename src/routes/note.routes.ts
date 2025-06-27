import express from "express";

import {
  createCategories,
  createNotes,
  deleteNote,
  getNote,
  getNotes,
  updateNote,
} from "../controllers/note.controller";

const router = express.Router();

router.post("/", createNotes);
router.get("/", getNotes);
router.get("/:id", getNote);
router.delete("/:id", deleteNote);
router.put("/:id", updateNote);
router.post("/categories", createCategories);

export default router;
