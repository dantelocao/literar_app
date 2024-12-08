import bookModel from "../models/bookModel.js";


export const createBook = async (body) => {
    try {
        const newBook = new bookModel(body);
        await newBook.save();
        return newBook;

    } catch (error) {
        throw error;
    }
};