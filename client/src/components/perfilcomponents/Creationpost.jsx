import React, { useState } from 'react';

// Dados de exemplo para os livros do usuário
const livrosUsuario = [
  { id: 1, titulo: 'Dom Casmurro', autor: 'Machado de Assis' },
  { id: 2, titulo: '1984', autor: 'George Orwell' },
  { id: 3, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
  { id: 4, titulo: 'Harry Potter', autor: 'J.K. Rowling' },
];

const CriarPost = () => {
  // Estado para armazenar os livros selecionados e privacidade
  const [livrosSelecionados, setLivrosSelecionados] = useState([]);
  const [privacidade, setPrivacidade] = useState('todos');

  // Função para selecionar os livros
  const handleLivroSelection = (e) => {
    const livroId = parseInt(e.target.value);
    setLivrosSelecionados((prevSelecionados) =>
      prevSelecionados.includes(livroId)
        ? prevSelecionados.filter((id) => id !== livroId)
        : [...prevSelecionados, livroId]
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
    <div className="container mx-auto p-6 md:p-8 lg:p-12 space-y-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Criar Post</h2>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl space-y-8">
        {/* Seletor de Livros */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-4">Escolha os Livros</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {livrosUsuario.map((livro) => (
              <div key={livro.id} className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  value={livro.id}
                  onChange={handleLivroSelection}
                  className="w-5 h-5 text-indigo-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <span className="text-lg text-gray-800">{livro.titulo} - {livro.autor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Seletor de Privacidade */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-4">Escolha a Privacidade</label>
          <select
            value={privacidade}
            onChange={(e) => setPrivacidade(e.target.value)}
            className="w-full p-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="todos">Todos</option>
            <option value="amigos">Somente Amigos</option>
            <option value="somenteEu">Somente Eu</option>
          </select>
        </div>

        {/* Botão de Submissão */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white p-4 rounded-lg w-full sm:w-auto transition duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Publicar Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CriarPost;
