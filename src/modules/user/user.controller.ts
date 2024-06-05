import {
  sendExistsResponse,
  sendSuccessResponse,
} from "../../utils/responseHelper";
import { tryCatch } from "../../utils/tryCatch";
import { userServices } from "./services";

const addUser = tryCatch(async (req, res) => {
  const result = await userServices.addUser(req.body);

  if (!result.exists) {
    sendSuccessResponse(res, {
      status: 200,
      message: "User added successfully",
      data: result.newUser,
    });
  } else {
    sendExistsResponse(res, {
      message: "User already in database. so chill!",
    });
  }
});

const updateUserBorroedBooks = tryCatch(async (req, res) => {
  const result = await userServices.updateUserBorrwedBook(
    req.params.userEmail,
    req.body
  );

  sendSuccessResponse(res, {
    status: 200,
    message: "New borrowed Book added successfully",
    data: result,
  });
});

const getUserBorrowedBooks = tryCatch(async (req, res) => {
  const result = await userServices.getUserBorrowedBooks(req.params.userEmail);
  sendSuccessResponse(res, {
    status: 200,
    message: "User with borrowed Books info got successfully",
    data: result,
  });
});

const updateUserBorrowedBookStatus = tryCatch(async (req, res) => {
  const { userId, bookId } = req.params;
  const { confirmation } = req.body;
  const result = await userServices.updateUserBorrowedBookStatus(
    userId,
    bookId,
    { confirmation }
  );

  if (confirmation) {
    sendSuccessResponse(res, {
      status: 200,
      message:
        "User with borrowed Books confirmation status updated successfully",
      data: result,
    });
  } else {
    sendSuccessResponse(res, {
      status: 200,
      message:
        "User with borrowed Books confirmation status updated successfully",
      data: {},
    });
  }
});

const confirmBorrowedBookStatus = tryCatch(async (req, res) => {
  const { borrowerUserId, borrowedBookId } = req.params;
  const result = await userServices.updateConfirmBorrowedBook(
    borrowerUserId,
    borrowedBookId
  );
  sendSuccessResponse(res, {
    status: 200,
    message:
      "User with confirm borrowed Books status updated successfully",
    data: result,
  });
});

const deleteRejectedRequest = tryCatch(async (req, res) => {
  const { borrowerUserId, borrowedrequestId } = req.params;

    const result = await userServices.deleteRejectedBorrowedRequest(
      borrowerUserId,
      borrowedrequestId
    );

    sendSuccessResponse(res, {
      status: 200,
      message: "Deleted rejected request successfully",
      data: result,
    });
});


export const userController = {
  addUser,
  updateUserBorroedBooks,
  getUserBorrowedBooks,
  updateUserBorrowedBookStatus,
  confirmBorrowedBookStatus,
  deleteRejectedRequest,
};
