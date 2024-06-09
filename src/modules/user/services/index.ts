import { addUser } from "./addUser";
import { deleteRejectedBorrowedRequest } from "./deleterejectedBorrowedRequest";
import { getUserBorrowedBooks } from "./getUserBorrowedBooks";
import { secureLogin } from "./secureLogin";
import { updateBookmarkStatus } from "./updateBookmark";
import { updateConfirmBorrowedBook } from "./updateConfirmBorrowedBook";
import { updateUserBorrowedBookStatus } from "./updateUserBorrowedBookStatus";
import { updateUserBorrwedBook } from "./updateUserBorrowedBooks";
import { updateUserProfile } from "./updateUserProfile";

export const userServices = {
  addUser,
  secureLogin,
  updateUserBorrwedBook,
  getUserBorrowedBooks,
  updateUserBorrowedBookStatus,
  updateConfirmBorrowedBook,
  deleteRejectedBorrowedRequest,
  updateBookmarkStatus,
  updateUserProfile,
};
