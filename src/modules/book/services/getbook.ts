import { Book } from "../book.model";

export const getbook = async (bookId: string) => {
  const book = await Book.findById({ _id: bookId }).populate({
    path: "user",
    options: {
      select: "userName userEmail userImage",
    },
  });
  return book;
};
