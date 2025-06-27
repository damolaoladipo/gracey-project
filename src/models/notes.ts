import mongoose, { Schema } from "mongoose";

const notesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    attachment: {
      type: String,
      url: String,
    },
    backgroundColor: {
      type: String,
      default: "transparent",
    },
    textColor: {
      type: String,
      default: "inherit",
    },
    favourite: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      default: "personal",
      enum: ["personal", "work", "study", "business", "random"],
    },
    createdAt: {
      type: String,
    },
    updatedAt: {
      type: String,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", notesSchema);

export default Note;
