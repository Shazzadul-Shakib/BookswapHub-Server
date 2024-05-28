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

export const userController = {
  addUser,
  updateUserBorroedBooks,
  getUserBorrowedBooks,
};
