import React, { useState, useEffect } from 'react';
import { createPost, getAllBooks, getUserProfileData } from '../../utils/api/api';
import { useParams, useNavigate } from "react-router-dom";


const CriarPost = () => {
  const { username } = useParams();

  // Estado para armazenar os livros selecionados e privacidade
  const [descricao, setDescricao] = useState("");

  const [livrosUsuario, setLivrosUsuario] = useState([]);
  const [livrosSelecionados, setLivrosSelecionados] = useState([]);
  const [dropdownAberto, setDropdownAberto] = useState(false); // Controla a visibilidade do dropdown

  // Função para buscar os livros do backend
  const fetchLivros = async () => {
    try {
      const response = await getAllBooks()

      // Verifique se data.allBooks é um array antes de atualizar o estado
      if (Array.isArray(response.data.allBooks)) {
        setLivrosUsuario(response.data.allBooks);  // Atualiza o estado com o array de livros
        //console.log(livrosUsuario)
      } else {
        console.error('A chave "allBooks" não é um array');
      }

    } catch (error) {
      console.error('Erro ao buscar os livros:', error);
    }
  };

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



  const navigate = useNavigate();

  const handleNavigate = () => {
    // Redireciona para a página inicial
    navigate('/');

    // Depois de 1 segundo, vai para o perfil
    setTimeout(() => {
      navigate(`/profile/${user.username}`);
    }, 50); 
  };



  const getUserProfileInfo = async () => {

    try {
      const response = await getUserProfileData(username);
      const postData = {
        userId: response.data.userInfo._id,
        userName: username,
        desc: descricao,
        books: livrosSelecionados,
      };
      console.log(postData)

      try {
        const res = await createPost(postData)
        handleNavigate()
        
      } catch (error) {
        console.log(error)
      }

    
    } catch (error) {
      console.error('Erro ao buscar dados de usuário:', error);
    }
  };


  const isPostButtonDisabled = !descricao.trim() || livrosSelecionados.length === 0;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      {/* Título */}
      <h1 className="text-2xl font-bold text-center text-indigo-700">Novo Post</h1>

      {/* Campo de Descrição */}
      <div>
        <label className="text-lg font-semibold text-gray-800 mb-2 block">Descrição</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descreva seu post..."
          className="w-full h-24 border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-indigo-500"
        />
      </div>

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

      {/* Botão de Submissão */}
      <div className="flex justify-center">
        <button
          onClick={getUserProfileInfo}
          disabled={isPostButtonDisabled}
          className={`text-white text-sm py-2 px-4 rounded transition ${
            isPostButtonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          }`}
        >
          Criar Post
        </button>
      </div>
    </div>
  );
  
};

export default CriarPost;
