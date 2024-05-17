import { Router } from "express";
import { bookController } from "./book.controller";

export const bookRouter=Router();

bookRouter.post("/", bookController.addBook);