import { Book } from "../book.model"

export const deleteSingleBook=async(bookId:string)=>{
    const deleteBook=await Book.findByIdAndDelete({_id:bookId})
    return deleteBook;
}