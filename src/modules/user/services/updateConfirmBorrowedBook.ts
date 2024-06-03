import { Types } from "mongoose";
import { User } from "../user.model"

export const updateConfirmBorrowedBook = async (
  borrowerUserId: string,
  borrowedBookId: string
) => {
  const updateConfirmBorrowedBookStatus = await User.findOneAndUpdate(
    {
      _id:borrowerUserId,
      "borrowedBooks.bookId": new Types.ObjectId(borrowedBookId),
    },
    {
      $set: {
        "borrowedBooks.$.borrowed": true,
        "borrowedBooks.$.confirmationCode": null,
      },
    },
    {
      new: true,
    }
  );
  return updateConfirmBorrowedBookStatus;
};