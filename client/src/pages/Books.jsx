import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';

const Books = () => {
  const [books, setBooks] = useState([]); // Estado para armazenar todos os livros
  const [visibleBooks, setVisibleBooks] = useState(24); // Controla quantos livros estão visíveis

  // Simula a busca de dados (substituir com sua API real)
  useEffect(() => {
    const fetchBooks = async () => {
      // Mock de 50 livros para simular a lista
      const mockBooks = Array.from({ length: 50 }, (_, index) => ({
        id: index + 1,
        title: `Livro ${index + 1}`,
        author: `Autor ${index + 1}`,
      }));
      setBooks(mockBooks);
    };

    fetchBooks();
  }, []);

  // Função para carregar mais livros ao clicar no botão
  const loadMoreBooks = () => {
    setVisibleBooks((prev) => prev + 24); // Exibe mais 24 livros
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Lista de Livros</h1>

        {/* Grade de livros */}
        <div className="grid grid-cols-8 gap-4">
          {books.slice(0, visibleBooks).map((book) => (
            <div
              key={book.id}
              className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition"
            >
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