import { TBook } from "../book.interface";
import { Book } from "../book.model";

export const addBook = async (payload: Omit<TBook, "_id">) => {
  const newBook = await Book.create(payload);
  return newBook;
};
