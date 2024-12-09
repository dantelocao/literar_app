import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';

const Books = () => {
  const [books, setBooks] = useState([]); // Estado para armazenar todos os livros
  const [visibleBooks, setVisibleBooks] = useState(24); // Controla quantos livros estão visíveis

  // Simula a busca de dados (substituir API
  useEffect(() => {
    const fetchBooks = async () => {
      // Simulador de livros com capas
      const mockBooks = Array.from({ length: 50 }, (_, index) => ({
        id: index + 1,
        title: `Livro ${index + 1}`,
        author: `Autor ${index + 1}`,
        cover: `https://via.placeholder.com/150?text=Livro+${index + 1}`, // URL mockada para a capa
      }));
      setBooks(mockBooks);
    };

    fetchBooks();
  }, []);

  // Mais livros
  const loadMoreBooks = () => {
    setVisibleBooks((prev) => prev + 8);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Biblioteca</h1>

        {/* Grade de livros */}
        <div className="grid grid-cols-8 gap-4">
          {books.slice(0, visibleBooks).map((book) => (
            <div
              key={book.id}
              className="border border-gray-300 rounded-lg shadow hover:shadow-lg transition p-2 flex flex-col items-center text-center"
            >
              <img
                src={book.cover}
                alt={`Capa do livro ${book.title}`}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="font-semibold text-lg">{book.title}</h2>
              <p className="text-gray-600">Autor: {book.author}</p>
            </div>
          ))}
        </div>

        {/* Botão "Ver Mais" */}
        {visibleBooks < books.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreBooks}
              className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
            >
              Ver Mais
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Books;
