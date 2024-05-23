import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const UserSchema = new Schema<TUser>({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userImage: { type: String},
});

export const User=model("user",UserSchema);