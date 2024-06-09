import { Router } from "express";
import { bookController } from "./book.controller";
import authenticateToken from "../../middleware/authenticateToken ";

export const bookRouter = Router();

bookRouter.post("/",authenticateToken, bookController.addBook);
bookRouter.get("/", authenticateToken,bookController.getBook);
bookRouter.get("/:bookId",authenticateToken,bookController.getSigleBook);

