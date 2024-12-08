import { createBook } from "../services/bookServices.js";


export const createBookController = async (req, res) => {
    try {
        const newBook = await createBook(req.body);

        res.status(200).json({
            newBook,
            message:"book has been created",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            message: "book creation failed",
            err
         })
    }        
}
