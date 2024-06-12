import { User } from "../../user/user.model";
import { Book } from "../book.model";

export const deleteSingleBook = async (bookId: string) => {
  const deleteBook = await Book.findByIdAndDelete({ _id: bookId });

 if(deleteBook){
     try {
       // Delete from borrowedBooks
       await User.updateMany(
         { "borrowedBooks.bookId": bookId },
         { $pull: { borrowedBooks: { bookId: bookId } } }
       );

       // Delete from userNotification
       await User.updateMany(
         { "userNotification.bookId": bookId },
         { $pull: { userNotification: { bookId: bookId } } }
       );
     } catch (error) {
       console.error("Error finding and deleting book by bookId:", error);
       throw error;
     }
 }

  return deleteBook;
};
