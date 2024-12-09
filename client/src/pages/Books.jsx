import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';

const Books = () => {
  const [books, setBooks] = useState([]); // Estado para armazenar a lista de livros

  // Simula a busca de dados de livros (substituir com chamada à API)
  useEffect(() => {
    const fetchBooks = async () => {
      // Dados mockados
      const mockBooks = [
        { id: 1, title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien' },
        { id: 2, title: 'Harry Potter', author: 'J.K. Rowling' },
        { id: 3, title: 'Dom Quixote', author: 'Miguel de Cervantes' },
        { id: 4, title: '1984', author: 'George Orwell' },
        { id: 5, title: 'O Alquimista', author: 'Paulo Coelho' },
      ];
      setBooks(mockBooks);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>Lista de Livros</h1>
        <div>
          {books.length > 0 ? (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {books.map((book) => (
                <li key={book.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                  <h2>{book.title}</h2>
                  <p><strong>Autor:</strong> {book.author}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Carregando livros...</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Books;