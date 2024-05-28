import { Schema } from "mongoose";

export type TUser = {
  _Id: Schema.Types.ObjectId;
  userName: string;
  userEmail: string;
  userImage: string;
  borrowedBooks: Schema.Types.ObjectId[];
};

export type TBorrowedBook = {
  _id: Schema.Types.ObjectId;
  bookId: Schema.Types.ObjectId;
  borrowed: boolean;
  borrowerAddress: string;
  borrowerCity: string;
  borrowerEmail: string;
  bookOwnerUserId: Schema.Types.ObjectId;
  borrowerUserId: string;
  borrowerName: string;
  contactNumber: string;
  deadline: string;
  pending: boolean;
};
