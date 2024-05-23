import { Router } from "express";
import { bookRouter } from "./modules/book/book.router";
import { userRouter } from "./modules/user/user.router";

export const appRouter = Router();

appRouter.use("/book", bookRouter);
appRouter.use("/user", userRouter);
