import { Book } from "../book.model"

export const getBooks=async()=>{
    const books=await Book.find();
    return books;
}