import { Router } from "express";
import { bookController } from "./book.controller";

export const bookRouter = Router();

bookRouter.post("/", bookController.addBook);
bookRouter.get("/",bookController.getBook);
bookRouter.get("/:bookId",bookController.getSigleBook);

