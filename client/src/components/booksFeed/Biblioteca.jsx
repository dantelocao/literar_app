import React, { useState, useEffect } from 'react';
import '../.././index.css';

const Biblioteca = () => {
  const [livros, setLivros] = useState([]);
  const [mostrar, setMostrar] = useState(6); // Mostra 6 livros inicialmente
  const [loading, setLoading] = useState(true);

  // Função para embaralhar livros
  const embaralharLivros = (livros, quantidade) => {
    const livrosEmbaralhados = livros.sort(() => Math.random() - 0.5);
    return livrosEmbaralhados.slice(0, quantidade);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch('/livros.json'); // Arquivo JSON na pasta public
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados');
        }
        const data = await response.json();
        const livrosAleatorios = embaralharLivros(data, 8); // Pega 8 livros aleatórios
        setLivros(livrosAleatorios);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const carregarMais = () => {
    setMostrar((prevMostrar) => prevMostrar + 6); // Incrementa 6 livros
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        <p className="text-indigo-700 text-lg font-bold">Carregando livros...</p>
      </div>
    );
  }
  
  return (
    <section id="library" className="my-10 px-4">
      <h2 className="text-2xl font-bold text-center text-indigo-800 mb-4">Biblioteca</h2>
      <p className="text-gray-600 text-center mb-6">Gerencie seus livros lidos, wishlist e avaliações.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {livros.slice(0, mostrar).map((livro, index) => (
          <div
            key={index}
            className="p-2 bg-white shadow rounded-lg text-center transition-transform transform hover:scale-105"
          >
            <div className="w-full h-28 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={`https://via.placeholder.com/150?text=${livro.titulo}`} // Placeholder de imagem
                alt={livro.titulo}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-2 text-sm font-semibold text-gray-800">{livro.titulo}</h3>
            <p className="text-xs text-gray-600">{livro.autor}</p>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full inline-block mt-2 ${
                index % 2 === 0 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {index % 2 === 0 ? 'Lido' : 'Desejo'}
            </span>
          </div>
        ))}
      </div>

      {mostrar < livros.length && (
        <div className="text-center mt-6">
          <button
            onClick={carregarMais}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
          >
            Ver Mais
          </button>
        </div>
      )}
    </section>
  );
};

export default Biblioteca;