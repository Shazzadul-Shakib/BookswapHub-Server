import { TBorrowedBook } from "../user.interface";
import { User } from "../user.model";

export const updateUserBorrwedBook = async (
  userEmail: string,
  payload: Omit<TBorrowedBook, "_id">
) => {
  const { borrowerEmail, ...borrowedBookInfo } = payload;

  const newPayload = { ...borrowedBookInfo };
  const borrowerUser = await User.findOne({ userEmail: borrowerEmail });

  // Borrower and bookOwner UserId
  const borrowerUserId = borrowerUser?._id.toHexString();
  const bookOwnerUserId = newPayload.bookOwnerUserId;

  // Update the user with the provided payload
  const updatedUser = await User.findOneAndUpdate(
    { userEmail },
    {
      $push: { borrowedBooks: newPayload },
    },
    { new: true } // Return the updated document
  );

  if (updatedUser) {
    // Send notification to owner
    const { bookOwnerUserId, pending, borrowed, ...restNewPayload } =
      newPayload;
    const ownerNotifyInfo = { ...restNewPayload, borrowerUserId };
    await User.findByIdAndUpdate(
      { _id: bookOwnerUserId },
      {
        $push: { userNotification: ownerNotifyInfo },
      },
      { new: true }
    );

  } else {
    console.error(`Failed to find and update user ${userEmail} for notification.`);
  }

  return updatedUser;
};
