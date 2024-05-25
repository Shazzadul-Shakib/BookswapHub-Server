import { Schema } from "mongoose";

export type TBook = {
  _id: Schema.Types.ObjectId;
  bookName: string;
  bookDescription: string;
  bookImage: string;
  user:string;
  userEmail:string;
  author:string;
  language:string;
  page:number;
};
