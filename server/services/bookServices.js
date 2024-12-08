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


// Função para pegar todos os livros do banco de dados
export const getAllBooks = async () => {
    try {
        const livros = await bookModel.find(); // Recupera todos os livros da coleção
        return livros;
    } catch (error) {
        throw error;
    }
};


