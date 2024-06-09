import { Router } from "express";
import { userController } from "./user.controller";
import authenticateToken from "../../middleware/authenticateToken ";

export const userRouter = Router();

userRouter.post("/", userController.addUser);
userRouter.post("/jwt", userController.handleSecureLogin);
userRouter.post("/logout", userController.handleecureLogout);
userRouter.patch(
  "/:userEmail",
  authenticateToken,
  userController.updateUserBorroedBooks
);
userRouter.get(
  "/:userEmail",
  authenticateToken,
  userController.getUserBorrowedBooks
);
userRouter.patch(
  "/status/:userId/:bookId",
  authenticateToken,
  userController.updateUserBorrowedBookStatus
);
userRouter.patch(
  "/confirm/:borrowerUserId/:borrowedBookId",
  authenticateToken,
  userController.confirmBorrowedBookStatus
);
userRouter.patch(
  "/delete/:borrowerUserId/:borrowedrequestId",
  authenticateToken,
  userController.deleteRejectedRequest
);
userRouter.patch(
  "/bookmark/:ownerEmail",
  authenticateToken,
  userController.updateBookmark
);
userRouter.patch(
  "/updateProfile/:userEmail",
  authenticateToken,
  userController.updateUserProfile
);
