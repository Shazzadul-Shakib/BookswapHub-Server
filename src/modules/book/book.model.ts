import { Schema, model } from "mongoose";
import { TBook } from "./book.interface";

const BookSchema = new Schema<TBook>({
  bookName: { type: String, required: true },
  bookDescription: { type: String, required: true },
  bookImage: { type: String, required: true },
  user: { type: String, ref: "user", required: true },
});

export const Book = model("book", BookSchema);
