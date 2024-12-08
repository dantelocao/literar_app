import express from "express";
import { createBookController, getAllBooksController } from "../controllers/bookController.js";


const router = express.Router();

//create book
router.post("/create-book", createBookController);
// update book
router.put("/update-book/:id", );
// delete book
router.delete("/delete-book/:id", );

//get all books
router.get("/get-books", getAllBooksController);


export default router;