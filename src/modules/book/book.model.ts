import { Schema, model } from "mongoose";
import { TBook } from "./book.interface";

const BookSchema = new Schema<TBook>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  bookImage: { type: String, required: true },
});

export const Book = model("book", BookSchema);
