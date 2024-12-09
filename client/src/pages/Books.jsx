import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';

// Componente para exibir um livro individual
const BookCard = ({ book }) => (
  <div className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition">
    <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-4 rounded">
      {book.capaUrl ? (
        <img src={book.capaUrl} alt={book.titulo} className="w-full h-48 object-cover rounded" />
      ) : (
        <p className="text-gray-500 text-sm">Sem imagem</p>
      )}
    </div>
    <h2 className="font-semibold text-lg">{book.titulo}</h2>
    <p className="text-gray-600">Autor: {book.autor}</p>
    {/*
    
    <p className="text-gray-500">ISBN: {book.isbn}</p>
    */}
    <p className="text-gray-500">Páginas: {book.paginas}</p>
    <p className="text-gray-500">Ano: {book.ano}</p>
  </div>
);

const Books = () => {
  const [books, setBooks] = useState([]); // Todos os livros
  const [filteredBooks, setFilteredBooks] = useState([]); // Livros filtrados pela busca
  const [searchQuery, setSearchQuery] = useState(''); // Termo de pesquisa
  const [visibleBooks, setVisibleBooks] = useState(24); // Quantidade de livros visíveis
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Erro na busca

  // Efeito para carregar os livros
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/livros.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados');
        }
        const data = await response.json();
        setBooks(data);
        setFilteredBooks(data); // Inicialmente, todos os livros são filtrados
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
        setError('Ocorreu um erro ao carregar os livros. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Função para lidar com a pesquisa
  const handleSearch = () => {
    const results = books.filter((book) =>
      // Verifica se o título é uma string válida antes de chamar toLowerCase()
      book.titulo && typeof book.titulo === 'string' && book.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(results);
    setVisibleBooks(24); // Reseta a quantidade de livros visíveis quando a busca é feita
  };

  // Função para carregar mais livros
  const loadMoreBooks = () => {
    setVisibleBooks((prev) => prev + 8);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Biblioteca</h1>

        {/* Barra de pesquisa */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-lg w-1/2"
            placeholder="Pesquisar por título"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="ml-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
          >
            Buscar
          </button>
        </div>

        {loading ? (
          <p className="text-center">Carregando livros...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredBooks.length === 0 ? (
          <p className="text-center text-gray-500">Nenhum livro encontrado.</p>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {filteredBooks.slice(0, visibleBooks).map((book) => (
                <BookCard key={book.isbn} book={book} />
              ))}
            </div>

            {visibleBooks < filteredBooks.length && (
              <div className="text-center mt-8">
                <button
                  onClick={loadMoreBooks}
                  className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
                >
                  Ver Mais
                </button>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Books;
