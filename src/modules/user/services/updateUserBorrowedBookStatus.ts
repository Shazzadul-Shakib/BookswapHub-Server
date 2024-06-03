import { Types } from "mongoose";
import { User } from "../user.model";
import { ConfirmationPayload } from "../user.interface";
import { Book } from "../../book/book.model";

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
    // If reject update borrowed book status pendng false means rejected
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

    // Then delete the notification of the owner
    const ownerInfo = await Book.findOne({ _id: bookId });
    const ownerUserId = ownerInfo?.user;

    await User.findOneAndUpdate(
      { _id: ownerUserId },
      { $pull: { userNotification: { bookId: bookId } } },
      { new: true }
    );

    return updatedUserConfirmationStatus;
  }
};
