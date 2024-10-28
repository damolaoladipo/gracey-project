import mongoose, { Schema } from "mongoose";
import Category from './category.model';

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
    Category: {
        type: Schema.Types.ObjectId,
        ref:  'Category',
    }
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", notesSchema);

export default Note;
