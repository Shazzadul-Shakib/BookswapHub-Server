import { TUser } from "../user.interface";
import { User } from "../user.model";

export const addUser = async (payload: Omit<TUser, "_id">) => {
  const existingUser = await User.findOne({ userEmail: payload.userEmail });

  if (existingUser) {
    return { exists: true, message: "User with this email already exists" };
  }
  const newUser = await User.create(payload);
  return { exists: false, newUser };
};
