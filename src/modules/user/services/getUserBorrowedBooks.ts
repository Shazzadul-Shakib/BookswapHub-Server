import { User } from "../user.model";

//having the whole user data with borrowedbooks and notifications
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
    })
    .populate({
      path: "userBookmark",
      populate: [
        {
          path: "bookId",
          populate: [{ path: "user", select: "userName userEmail userImage" }],
        },
      ],
    });

  return currentUserInfo;
};
