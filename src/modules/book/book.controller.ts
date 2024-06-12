import { sendSuccessResponse } from "../../utils/responseHelper";
import { tryCatch } from "../../utils/tryCatch";
import { bookServices } from "./services";

// ----- Add book controller ----- //
const addBook = tryCatch(async (req, res) => {
  const newBook = await bookServices.addBook(req.body);
  sendSuccessResponse(res, {
    status: 200,
    message: "Book added Successfully",
    data: newBook,
  });
});

// ----- get book controller ----- //
const getBook = tryCatch(async (req, res) => {
  const allBooks = await bookServices.getBooks();
  sendSuccessResponse(res, {
    status: 200,
    message: "Books retrived successfully",
    data: allBooks,
  });
});

const getSigleBook = tryCatch(async (req, res) => {
  const book = await bookServices.getbook(req.params.bookId);
  sendSuccessResponse(res, {
    status: 200,
    message: "Book retrived successfully",
    data: book,
  });
});

const deleteSingleBook = tryCatch(async (req, res) => {
  const result = await bookServices.deleteSingleBook(req.params.bookId);

  if (result) {
    sendSuccessResponse(res, {
      status: 200,
      message: "Book deleted successfully",
      data: {},
    });
  }
});

export const bookController = {
  addBook,
  getBook,
  getSigleBook,
  deleteSingleBook,
};
