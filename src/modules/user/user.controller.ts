import {
  sendExistsResponse,
  sendSuccessResponse,
} from "../../utils/responseHelper";
import { tryCatch } from "../../utils/tryCatch";
import { userServices } from "./services";

// Add user controller
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

// Login user and send token to htttp only cookie
const handleSecureLogin = tryCatch(async (req, res) => {
  const result = await userServices.secureLogin(req.body);
  console.log(result);
  res.cookie("token", result, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  sendSuccessResponse(res, {
    status: 200,
    message: "Token sent successfully",
    data: {},
  });
});

// Logout user and clear token from cookie

const handleecureLogout = tryCatch(async (req, res) => {
  const { user } = req.body;

  res.clearCookie("token", { maxAge: 0 });
  sendSuccessResponse(res, {
    status: 200,
    message: "Token delete successfully",
    data: {},
  });
});

// update user profile
const updateUserProfile = tryCatch(async (req, res) => {
  const { userEmail } = req.params;
  const result = await userServices.updateUserProfile(userEmail, req.body);

  if (result) {
    sendSuccessResponse(res, {
      status: 200,
      message: "updated profile successfully",
      data: result,
    });
  }
});

// Update user Borrowed books
const updateUserBorroedBooks = tryCatch(async (req, res) => {
  const result = await userServices.updateUserBorrwedBook(
    req.params.userEmail,
    req.body
  );

  if (result) {
    sendSuccessResponse(res, {
      status: 200,
      message: "New borrowed Book added successfully",
      data: result,
    });
  }
});

// get user Borrowed books
const getUserBorrowedBooks = tryCatch(async (req, res) => {
  const result = await userServices.getUserBorrowedBooks(req.params.userEmail);

  if (result) {
    sendSuccessResponse(res, {
      status: 200,
      message: "User with borrowed Books info got successfully",
      data: result,
    });
  }
});

// Update borrowed book status
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

// Confirm borrowed book status
const confirmBorrowedBookStatus = tryCatch(async (req, res) => {
  const { borrowerUserId, borrowedBookId } = req.params;
  const result = await userServices.updateConfirmBorrowedBook(
    borrowerUserId,
    borrowedBookId
  );

  if (result) {
    sendSuccessResponse(res, {
      status: 200,
      message: "User with confirm borrowed Books status updated successfully",
      data: result,
    });
  }
});

// Delete rejected request
const deleteRejectedRequest = tryCatch(async (req, res) => {
  const { borrowerUserId, borrowedrequestId } = req.params;

  const result = await userServices.deleteRejectedBorrowedRequest(
    borrowerUserId,
    borrowedrequestId
  );

  if (result) {
    sendSuccessResponse(res, {
      status: 200,
      message: "Deleted rejected request successfully",
      data: result,
    });
  }
});

// Bookmark controller
const updateBookmark = tryCatch(async (req, res) => {
  const { ownerEmail } = req.params;
  const result = await userServices.updateBookmarkStatus(ownerEmail, req.body);

  if (result) {
    sendSuccessResponse(res, {
      status: 200,
      message: "Book added to bookmark successfully",
      data: result,
    });
  }
});

export const userController = {
  addUser,
  handleSecureLogin,
  handleecureLogout,
  updateUserBorroedBooks,
  getUserBorrowedBooks,
  updateUserBorrowedBookStatus,
  confirmBorrowedBookStatus,
  deleteRejectedRequest,
  updateBookmark,
  updateUserProfile,
};
