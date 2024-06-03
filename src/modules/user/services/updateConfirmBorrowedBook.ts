import { Types } from "mongoose";
import { User } from "../user.model";
import { Book } from "../../book/book.model";

export const updateConfirmBorrowedBook = async (
  borrowerUserId: string,
  borrowedBookId: string
) => {
  const updateConfirmBorrowedBookStatus = await User.findOneAndUpdate(
    {
      _id: borrowerUserId,
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

  // If confirm then modify owner notification
  if (updateConfirmBorrowedBookStatus) {
    const borrowedBookInfo = await Book.findOne({ _id: borrowedBookId });
    const bookOwnerUserId = borrowedBookInfo?.user;

    await User.findOneAndUpdate(
      {
        _id: bookOwnerUserId,
        "userNotification.bookId":borrowedBookId
      },
      {
        $set:{
          "userNotification.$.confirm":true
        }
      }
    )

    // Updae book model with book is borrowed
    await Book.findOneAndUpdate(
      {
        _id:borrowedBookId
      },{
        $set:{
          borrowed:true
        }
      }
    )
  }

  return updateConfirmBorrowedBookStatus;
};
