import dotenv from 'dotenv'; // Importando dotenv
dotenv.config(); // Carregando as variáveis de ambiente do arquivo .env
console.log("MongoDB URL:", process.env.DB_URL); // Verifica a URL do MongoDB
import mongoose from 'mongoose';

// BT3qo4T5e0jK0CyU
export const dbConnect = () => {
    try {
        mongoose.connect(process.env.DB_URL); // Conexão com o MongoDB usando a URL do .env
        console.log("database has connected");
    } catch (error) {
        console.log("Error while connecting to the database:", error); // Melhor mensagem de erro
    }
};

