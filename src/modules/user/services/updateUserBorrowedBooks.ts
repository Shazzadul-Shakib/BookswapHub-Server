import { TBorrowedBook } from "../user.interface";
import { User } from "../user.model";

export const updateUserBorrwedBook = async (
  userEmail: string,
  payload: Omit<TBorrowedBook, "_id">
) => {
  const { borrowerEmail, ...rest } = payload;

  const userInfo = await User.findOne({ userEmail });
  const borrowerUserId = userInfo?._id.toHexString();

  const newPayload = { ...rest, borrowerUserId };

  // Update the user with the provided payload
  const updatedUser = await User.findOneAndUpdate(
    { userEmail },
    {
      $push: { borrowedBooks: newPayload },
    },
    { new: true } // Return the updated document
  );

  return updatedUser;
};
