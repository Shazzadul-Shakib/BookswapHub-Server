import { User } from "../../user/user.model";
import { TBook } from "../book.interface";
import { Book } from "../book.model";

export const addBook = async (payload: Omit<TBook, "_id">) => {
  const { userEmail, ...bookData } = payload;

  const userInfo = await User.findOne({ userEmail });
  const user = userInfo?._id.toHexString();

  const newPayload = {
    ...bookData,
    user,
  };

  const newBook = await Book.create(newPayload);
  return newBook;
};
