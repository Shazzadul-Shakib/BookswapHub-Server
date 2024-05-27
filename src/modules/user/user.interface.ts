import { Schema } from "mongoose";

export type TUser = {
  _Id: Schema.Types.ObjectId;
  userName: string;
  userEmail: string;
  userImage: string;
  borrowedBooks:[];
};

export type TBorrowedBook = {
  id: Schema.Types.ObjectId;
  bookId: string;
  borrowed: boolean;
  borrowerAddress: string;
  borrowerCity: string;
  borrowerEmail: string;
  bookOwnerUserId:string;
  borrowerUserId: string;
  borrowerName: string;
  contactNumber: string;
  deadline: string;
  pending: boolean;
};
