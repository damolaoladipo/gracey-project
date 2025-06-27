"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategories = exports.updateNote = exports.deleteNote = exports.getNote = exports.getNotes = exports.createNotes = void 0;
const notes_1 = __importDefault(require("../models/notes"));
const category_model_1 = __importDefault(require("../models/category.model"));
const createNotes = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new notes_1.default({ title, content });
        await newNote.save();
        res.status(201).json({ message: "Notes created successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "An error occured while creating note." });
    }
};
exports.createNotes = createNotes;
const getNotes = async (req, res) => {
    try {
        const notes = await notes_1.default.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    }
    catch (error) {
        res.status(500).json({ message: "Could not find notes!" });
    }
};
exports.getNotes = getNotes;
const getNote = async (req, res) => {
    console.log(req.user);
    try {
        const { id } = req.params;
        const note = await notes_1.default.findById(id);
        if (!note) {
            res.status(404).json({ message: "note not found!" });
        }
        res.status(200).json(note);
    }
    catch (error) {
        res.status(500).json({ message: "Note unavailable!" });
    }
};
exports.getNote = getNote;
const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await notes_1.default.findById(id);
        if (!note) {
            res.status(404).json({ message: "Note not found!" });
        }
        await notes_1.default.deleteOne({ _id: id });
        res.status(200).json({});
    }
    catch (error) {
        res.status(500).json({ message: "server error" });
        console.log(error);
    }
};
exports.deleteNote = deleteNote;
const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const noteUpdate = await notes_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(noteUpdate);
    }
    catch (error) {
        res.status(500).json({ message: "Cannot update Note!" });
    }
};
exports.updateNote = updateNote;
const createCategories = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = new category_model_1.default({ name });
        await newCategory.save();
        res.status(200).json({ message: "categories successfully created!" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating Category!" });
    }
};
exports.createCategories = createCategories;
