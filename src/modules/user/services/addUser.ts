import { TUser } from "../user.interface";
import { User } from "../user.model";

export const addUser=async(payload: Omit<TUser, "_id">)=>{
    const newUser= await User.create(payload);
    return newUser;
}