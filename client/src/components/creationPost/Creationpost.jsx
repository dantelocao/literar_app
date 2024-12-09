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
        //console.log(livrosUsuario)
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


  // Função para lidar com o envio do formulário
 const handleCreatePost = async (e) => {
  e.preventDefault(); // Evita o envio padrão do formulário (recarregar a página)

  try {
    // Enviando os dados para o backend usando o axios
    const response = await axios.post('http://localhost:5000/api/v1/posts/create-post', {
      books: livrosSelecionados,
      userId,
      userName,
      desc,
    });

    // Verificando se a resposta foi bem-sucedida
    if (response.status === 200) {
      alert('Cadastro realizado com sucesso!');

    } else {
      throw new Error('Erro ao cadastrar. Tente novamente.');
    }
  } catch (error) {
    setError(error.response?.data?.message || error.message || 'Erro desconhecido. Tente novamente.');
  }
};




  // Função para enviar o post
  const handleSubmit = (e) => {


    console.log('Post Criado:', postData);
    // Aqui você poderia enviar o postData para o backend para salvar no banco de dados
    

  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      {/* Título */}
      <h1 className="text-2xl font-bold text-center text-indigo-700">Novo Post</h1>
  
      {/* Seleção de Livros */}
      <div>
        <label className="text-lg font-semibold text-gray-800 mb-2 block">Escolha Livros</label>
        <div className="relative">
          <button
            onClick={() => setDropdownAberto(!dropdownAberto)}
            className="w-full h-10 border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-indigo-500 text-left"
          >
            {livrosSelecionados.length > 0
              ? `${livrosSelecionados.length} Livros Selecionados`
              : "Selecione os Livros"}
          </button>
  
          {/* Dropdown */}
          {dropdownAberto && (
            <div className="absolute left-0 w-full mt-2 bg-white shadow-lg border border-gray-300 rounded-lg z-10">
              <div className="max-h-40 overflow-y-auto p-2">
                {livrosUsuario.map((livro) => (
                  <div key={livro._id} className="flex items-center space-x-2 mb-2">
                    <input
                      type="checkbox"
                      id={`livro-${livro._id}`}
                      value={livro._id}
                      onChange={(e) => handleLivroSelection(e, livro._id)}
                      checked={livrosSelecionados.includes(livro._id)}
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                    <label htmlFor={`livro-${livro._id}`} className="text-gray-700">
                      {livro.bookName}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
  
      {/* Privacidade */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Privacidade</h3>
        <div className="flex items-center space-x-4">
          <label className="text-gray-700">
            <input
              type="radio"
              value="todos"
              checked={privacidade === 'todos'}
              onChange={() => setPrivacidade('todos')}
              className="mr-1"
            />
            Todos
          </label>
          <label className="text-gray-700">
            <input
              type="radio"
              value="privado"
              checked={privacidade === 'privado'}
              onChange={() => setPrivacidade('privado')}
              className="mr-1"
            />
            Privado
          </label>
        </div>
      </div>
  
      {/* Botão de Submissão */}
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white text-sm py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        >
          Criar Post
        </button>
      </div>
    </div>
  );
  
};

export default CriarPost;
