import { Schema, model } from "mongoose";
import { TBorrowedBook, TOwnerNotifyInfo, TUser } from "./user.interface";

const BorrowedBookSchema = new Schema<TBorrowedBook>({
  bookId: { type: String, ref: "book", required: true },
  borrowed: { type: Boolean, required: true },
  borrowerAddress: { type: String, required: true },
  borrowerCity: { type: String, required: true },
  bookOwnerUserId: { type: String, ref: "user", required: true },
  contactNumber: { type: String, required: true },
  deadline: { type: String, required: true },
  pending: { type: Boolean, default: null },
  confirmationCode: { type: Number, default: null },
});

const BookOwnerNotifySchema = new Schema<TOwnerNotifyInfo>({
  bookId: { type: String, ref: "book", required: true },
  borrowerAddress: { type: String, required: true },
  borrowerCity: { type: String, required: true },
  borrowerUserId: { type: String, ref: "user", required: true },
  contactNumber: { type: String, required: true },
  deadline: { type: String, required: true },
});

const UserSchema = new Schema<TUser>({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userImage: { type: String },
  borrowedBooks: [BorrowedBookSchema],
  userNotification: [BookOwnerNotifySchema],
});

export const User = model("user", UserSchema);
