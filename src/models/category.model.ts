import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      default: "personal",
      enum: ["personal", "work", "study", "business", "random"],
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("category", CategorySchema);
export default Category;
