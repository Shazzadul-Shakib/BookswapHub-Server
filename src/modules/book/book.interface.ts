import { Schema } from "mongoose";

export type TBook={
    _id:Schema.Types.ObjectId;
    name:string;
    description:string;
    bookImage:string;
}