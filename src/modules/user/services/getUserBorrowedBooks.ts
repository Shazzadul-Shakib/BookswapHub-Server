import { User } from "../user.model";

export const getUserBorrowedBooks = async (userEmail: String) => {
  const currentUserInfo = await User.find({ userEmail: userEmail }).populate({
    path: "borrowedBooks",
    populate: [
      { path: "bookId" },
      { path: "bookOwnerUserId", select: "userName userEmail" },
    ],
  });

  return currentUserInfo;
};
