import { Router } from "express";
import { userController } from "./user.controller";

export const userRouter = Router();

userRouter.post("/", userController.addUser);
userRouter.patch("/:userEmail", userController.updateUserBorroedBooks);
userRouter.get("/:userEmail", userController.getUserBorrowedBooks);
userRouter.patch(
  "/status/:userId/:bookId",
  userController.updateUserBorrowedBookStatus
);
userRouter.patch(
  "/confirm/:borrowerUserId/:borrowedBookId",
  userController.confirmBorrowedBookStatus
);
