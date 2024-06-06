import { addUser } from "./addUser";
import { deleteRejectedBorrowedRequest } from "./deleterejectedBorrowedRequest";
import { getUserBorrowedBooks } from "./getUserBorrowedBooks";
import { updateBookmarkStatus } from "./updateBookmark";
import { updateConfirmBorrowedBook } from "./updateConfirmBorrowedBook";
import { updateUserBorrowedBookStatus } from "./updateUserBorrowedBookStatus";
import { updateUserBorrwedBook } from "./updateUserBorrowedBooks";
import { updateUserProfile } from "./updateUserProfile";

export const userServices = {
  addUser,
  updateUserBorrwedBook,
  getUserBorrowedBooks,
  updateUserBorrowedBookStatus,
  updateConfirmBorrowedBook,
  deleteRejectedBorrowedRequest,
  updateBookmarkStatus,
  updateUserProfile,
};
