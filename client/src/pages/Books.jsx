import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';

// Componente para exibir um livro individual
const BookCard = ({ book }) => (
  <div className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition">
    <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-4 rounded">
      <p className="text-gray-500 text-sm">{book.titulo}</p>
    </div>
    <h2 className="font-semibold text-lg">{book.titulo}</h2>
    <p className="text-gray-600">Autor: {book.autor}</p>
    {/*
    
    <p className="text-gray-500">ISBN: {book.isbn}</p>
    <p className="text-gray-500">Páginas: {book.paginas}</p>
    <p className="text-gray-500">Ano: {book.ano}</p>
    */}
  </div>
);

const Books = () => {
  const [books, setBooks] = useState([]); // Estado para armazenar todos os livros
  const [visibleBooks, setVisibleBooks] = useState(24); // Controla quantos livros estão visíveis
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [searchTerm, setSearchTerm] = useState(''); // Novo estado para armazenar o termo de pesquisa
  const [searchActive, setSearchActive] = useState(false); // Controla se a pesquisa foi ativada

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch('/livros.json'); // Busca o arquivo JSON na pasta public
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);
  // Função segura para garantir que o valor é uma string antes de chamar toLowerCase()
  const toLowerSafe = (value) => {
    return value && typeof value === 'string' ? value.toLowerCase() : '';
  };

  // Função de filtro que será acionada após o botão de pesquisa ser pressionado
  const handleSearch = () => {
    setSearchActive(true);
  };

  // Filtra os livros com base no termo de busca
  const filteredBooks = searchActive
    ? books.filter((book) => {
        const titleMatch = toLowerSafe(book.titulo).includes(toLowerSafe(searchTerm));
        const authorMatch = toLowerSafe(book.autor).includes(toLowerSafe(searchTerm));
        return titleMatch || authorMatch; // Retorna true se algum dos campos corresponder
      })
    : books; // Se a pesquisa não estiver ativa, mostra todos os livros
  
  
    // Carrega mais 8 livros na página
  const loadMoreBooks = () => {
    setVisibleBooks((prev) => prev + 8);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Biblioteca</h1>
        
         {/* Barra de pesquisa */}
         <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Buscar por título ou autor..."
            className="w-1/2 p-2 border border-gray-300 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado de pesquisa
          />
          <button
            onClick={handleSearch} // Ativa a pesquisa quando o botão é pressionado
            className="ml-2 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
          >
            Buscar
          </button>
        </div>
        
        {loading ? (
          // Mensagem de carregamento
          <p className="text-center">Carregando livros...</p>
        ) : books.length === 0 ? (
          // Mensagem para lista vazia
          <p className="text-center text-gray-500">Nenhum livro encontrado.</p>
        ) : (
          <>
            {/* Grade de livros */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {books.slice(0, visibleBooks).map((book) => (
                <BookCard key={book.isbn} book={book} />
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
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Books;
