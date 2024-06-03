import { addUser } from "./addUser";
import { getUserBorrowedBooks } from "./getUserBorrowedBooks";
import { updateConfirmBorrowedBook } from "./updateConfirmBorrowedBook";
import { updateUserBorrowedBookStatus } from "./updateUserBorrowedBookStatus";
import { updateUserBorrwedBook } from "./updateUserBorrowedBooks";

export const userServices = {
  addUser,
  updateUserBorrwedBook,
  getUserBorrowedBooks,
  updateUserBorrowedBookStatus,
  updateConfirmBorrowedBook
};
