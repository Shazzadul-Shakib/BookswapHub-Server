import { Schema } from "mongoose";

export type TUser = {
  _Id: Schema.Types.ObjectId;
  userName: string;
  userEmail: string;
  userImage: string;
  borrowedBooks: Schema.Types.ObjectId[];
  userNotification: Schema.Types.ObjectId[];
  userBookmark: Schema.Types.ObjectId[];
};
export type UserProfileUpdatePayload = Pick<TUser, "userName" | "userImage">;

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
  pending: boolean | null;
  confirmationCode:number |null;
};
export type ConfirmationPayload= {
  confirmation: boolean | null;
}
export type TOwnerNotifyInfo = {
  _id: Schema.Types.ObjectId;
  bookId: Schema.Types.ObjectId;
  borrowerAddress: string;
  borrowerCity: string;
  borrowerUserId: Schema.Types.ObjectId;
  borrowerName: string;
  contactNumber: string;
  deadline: string;
  confirm:boolean;
};

export type TBookmark={
  _id:Schema.Types.ObjectId;
  bookId:Schema.Types.ObjectId;
  bookmarked:boolean;
}