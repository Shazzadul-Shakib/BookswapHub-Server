import { Schema } from "mongoose";

export type TUser = {
  _Id:Schema.Types.ObjectId,
  userName: string;
  userEmail: string;
  userImage:string;
};
