import { TBorrowedBook } from "../user.interface";
import { User } from "../user.model";

export const updateUserBorrwedBook = async (
  userEmail: string,
  payload: Omit<TBorrowedBook, "_id">
) => {
  const { borrowerEmail, ...borrowedBookInfo } = payload;

  const newPayload =  {...borrowedBookInfo} ;

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
