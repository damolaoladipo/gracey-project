import express, { Request, Response } from "express";
import Note from "../models/notes";
import Category from "../models/category.model";

export const createNotes = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json({ message: "Notes created successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occured while creating note." });
  }
};

export const getNotes = async (req: Request, res: Response): Promise<void> => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Could not find notes!" });
  }
};

export const getNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Note unavailable!" });
  }
};

export const deleteNote = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const note = await Note.deleteOne({ _id: id });
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Note unavailable!" });
  }
};

export const updateNote = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const noteUpdate = await Note.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(noteUpdate);
  } catch (error) {
    res.status(500).json({ message: "Cannot update Note!" });
  }
};

export const createCategories = async (req: Request, res: Response): Promise<void>=>{
    try {
        const {name} = req.body
        const newCategory = new Category({name})
        await newCategory.save()
        res.status(200).json({message: "categories successfully created!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error creating Category!"});
    }
}
