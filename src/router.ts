import { Router } from "express";
import { bookRouter } from "./modules/book/book.router";

export const appRouter = Router();

appRouter.use("/book", bookRouter);
