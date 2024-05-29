import { User } from "../user.model";

// actually here im having the whole user data with borrowedbooks and notifications
export const getUserBorrowedBooks = async (userEmail: String) => {
  const currentUserInfo = await User.find({ userEmail: userEmail })
    .populate({
      path: "borrowedBooks",
      populate: [
        { path: "bookId" },
        { path: "bookOwnerUserId", select: "userName userEmail" },
      ],
    })
    .populate({
      path: "userNotification",
      populate: [
        { path: "bookId" },
        { path: "borrowerUserId", select: "userName userEmail userImage" },
      ],
    });

  return currentUserInfo;
};
