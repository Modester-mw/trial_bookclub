import express from "express";
import membersRouter from "./membersRouter.js"
import booksRouter from "./booksRouter.js"
import usersRouter from './usersRouter.js'
import borrowingsRouter from "./borrowingsRouter.js";

const router = express.Router();


router.use("/members", membersRouter);
router.use("/books", booksRouter);
router.use("/users", usersRouter);
router.use("/borrowings", borrowingsRouter);

export default router;