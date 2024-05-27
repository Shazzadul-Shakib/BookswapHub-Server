import { Schema, model } from "mongoose";
import { TBorrowedBook, TUser } from "./user.interface";

const BorrowedBookSchema = new Schema<TBorrowedBook>({
  bookId: { type: String, required: true },
  borrowed: { type: Boolean, required: true },
  borrowerAddress: { type: String, required: true },
  borrowerCity: { type: String, required: true },
  borrowerUserId: { type: String, required: true },
  contactNumber: { type: String, required: true },
  deadline: { type: String, required: true },
  pending: { type: Boolean, required: true },
});

const UserSchema = new Schema<TUser>({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userImage: { type: String},
  borrowedBooks:[BorrowedBookSchema],
});

export const User=model("user",UserSchema);