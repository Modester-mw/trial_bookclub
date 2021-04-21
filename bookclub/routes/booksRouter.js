import express from "express";
import { addBook, viewAllBooks, viewBook, updateBook, deleteBook } from '../controllers/booksController.js'
import { authenticate } from '../middlewares/auth.js';

const booksRouter = express.Router();

//Add book books/
booksRouter.post("/", addBook);

//View a book books/:id
booksRouter.get("/:id", viewBook);

//View All book records books/
booksRouter.get("/", viewAllBooks);

//Update book record books/
booksRouter.put("/:id", updateBook);

//delete book books/:id
booksRouter.delete("/:id", deleteBook);

export default booksRouter;