import express from "express";
import { createBookController } from "../controllers/bookController.js";


const router = express.Router();

//create book
router.post("/create-book", createBookController);
// update post
router.put("/update-book/:id", );
// delete post
router.delete("/delete-book/:id", );

// get post
router.get("/get-book/:id", );


export default router;