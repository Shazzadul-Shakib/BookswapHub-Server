import { Book } from "../book.model";

export const getBooks = async () => {
  const books = await Book.find().populate({
    path: "user",
    options: {
      select: "userName userEmail userImage",
    },
  });
  return books;
};
