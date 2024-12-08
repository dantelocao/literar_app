import React, { useState, useEffect } from 'react';

const CriarPost = () => {
  // Estado para armazenar os livros selecionados e privacidade
  const [livrosUsuario, setLivrosUsuario] = useState([]);
  const [livrosSelecionados, setLivrosSelecionados] = useState([]);
  const [privacidade, setPrivacidade] = useState('todos');
  const [dropdownAberto, setDropdownAberto] = useState(false); // Controla a visibilidade do dropdown

  // Função para buscar os livros do backend
  const fetchLivros = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/books/get-books');
      const data = await response.json();

      // Verifique se data.allBooks é um array antes de atualizar o estado
      if (Array.isArray(data.allBooks)) {
        setLivrosUsuario(data.allBooks);  // Atualiza o estado com o array de livros
      } else {
        console.error('A chave "allBooks" não é um array');
      }

    } catch (error) {
      console.error('Erro ao buscar os livros:', error);
    }
  };

  // Chama a função fetchLivros quando o componente é montado
  useEffect(() => {
    fetchLivros();
  }, []);

  // Função para selecionar os livros
  const handleLivroSelection = (e, livroId) => {
    const isChecked = e.target.checked;
    setLivrosSelecionados((prevSelecionados) =>
      isChecked
        ? [...prevSelecionados, livroId]
        : prevSelecionados.filter((id) => id !== livroId)
    );
  };

  // Função para enviar o post
  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      livros: livrosSelecionados,
      privacidade,
    };

    console.log('Post Criado:', postData);
    // Aqui você poderia enviar o postData para o backend para salvar no banco de dados
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Título da página */}
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
        Criar um Novo Post
      </h1>

      {/* Dropdown para escolher os livros */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Escolha os Livros</h2>

      {/* Botão para abrir o dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownAberto(!dropdownAberto)}
          className="w-full h-12 border border-gray-300 rounded-lg p-4 text-lg focus:ring-2 focus:ring-indigo-500 text-left"
        >
          {livrosSelecionados.length > 0 ? `${livrosSelecionados.length} Livros Selecionados` : "Selecione os Livros"}
        </button>

        {/* Dropdown */}
        {dropdownAberto && (
          <div className="absolute left-0 w-full mt-2 bg-white shadow-lg border border-gray-300 rounded-lg z-10">
            <div className="max-h-60 overflow-y-auto p-4">
              {livrosUsuario.map((livro) => (
                <div key={livro._id} className="flex items-center space-x-4 mb-4">
                  <input
                    type="checkbox"
                    id={`livro-${livro._id}`}
                    value={livro._id}
                    onChange={(e) => handleLivroSelection(e, livro._id)}
                    checked={livrosSelecionados.includes(livro._id)}
                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                  <label htmlFor={`livro-${livro._id}`} className="flex items-center space-x-2">
                    <div className="w-16 h-16 bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-center text-sm">{livro.bookName}</span>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Opções de privacidade */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Privacidade do Post</h3>
        <div className="flex items-center space-x-4">
          <label className="text-gray-700">
            <input
              type="radio"
              value="todos"
              checked={privacidade === 'todos'}
              onChange={() => setPrivacidade('todos')}
              className="mr-2"
            />
            Todos
          </label>
          <label className="text-gray-700">
            <input
              type="radio"
              value="privado"
              checked={privacidade === 'privado'}
              onChange={() => setPrivacidade('privado')}
              className="mr-2"
            />
            Privado
          </label>
        </div>
      </div>

      {/* Botão para criar o post */}
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white text-lg py-2 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        >
          Criar Post
        </button>
      </div>
    </div>
  );
};

export default CriarPost;
