import { Types } from "mongoose";
import { User } from "../user.model";
import { ConfirmationPayload } from "../user.interface";

export const updateUserBorrowedBookStatus = async (
  userId: string,
  bookId: string,
  payload: ConfirmationPayload
) => {
  const { confirmation } = payload;

  if (confirmation) {
    const confirmationCode = Math.floor(1000 + Math.random() * 9000);
    const updatedUserConfirmationStatus = await User.findOneAndUpdate(
      {
        _id: new Types.ObjectId(userId),
        "borrowedBooks.bookId": new Types.ObjectId(bookId),
      },
      {
        $set: {
          "borrowedBooks.$.pending": true,
          "borrowedBooks.$.confirmationCode": confirmationCode,
        },
      },
      {
        new: true,
      }
    );
    return { ...updatedUserConfirmationStatus, confirmationCode };
  } else {
    const updatedUserConfirmationStatus = await User.findOneAndUpdate(
      {
        _id: new Types.ObjectId(userId),
        "borrowedBooks.bookId": new Types.ObjectId(bookId),
      },
      {
        $set: {
          "borrowedBooks.$.pending": false,
          "borrowedBooks.$.confirmationCode": null,
        },
      },
      {
        new: true,
      }
    );
    return updatedUserConfirmationStatus;
  }
};
