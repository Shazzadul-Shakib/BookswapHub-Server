import { Schema } from "mongoose";

export type TBook = {
  _id: Schema.Types.ObjectId;
  bookName: string;
  bookDescription: string;
  bookImage: string;
  userId:string;
  userEmail:string;
};
