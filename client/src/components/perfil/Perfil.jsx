import React, { useEffect, useState } from 'react';
import CriarPost from '../creationPost/Creationpost.jsx';
import { useParams } from "react-router-dom";
import { getUserProfileData, updateUserProfileData } from '../../utils/api/api';
import PostFeed from '../booksFeed/PostFeed.jsx';

const Perfil = () => {
  const { username } = useParams();

  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    desc: ""
  });

  // Obter informações do perfil ao carregar a página
  useEffect(() => {
    const getUserProfileInfo = async () => {
      try {
        const response = await getUserProfileData(username);
        setUser(response.data.userInfo);
        setFormData({
          username: response.data.userInfo.username,
          email: response.data.userInfo.email,
          desc: response.data.userInfo.desc || "I'm new here!"
        });
      } catch (error) {
        console.error('Erro ao buscar dados de usuário:', error);
      }
    };
    getUserProfileInfo();
  }, [username]);

  // Manipula alterações nos campos de entrada
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envia os dados atualizados para a API
  const handleSave = async () => {
    try {
      const data = {
        userId: user._id,  // Corrigido
        email: formData.email,
        username: formData.username,
        desc: formData.desc,
      };
      const response = await updateUserProfileData(data.userId, data);
  
      if (response.status === 200) {
        console.log("Dados atualizados com sucesso!");
      } else {
        console.error("Erro ao atualizar:", response.data);
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <main className="container mx-auto p-8">
      {/* Seção de Informações do Perfil */}
      <section className="flex items-center bg-white shadow-md rounded-lg p-6 mb-8">
        {/* Foto do Usuário */}
        <div className="flex-shrink-0">
          <img
            className="h-32 w-32 rounded-full object-cover"
            src="https://via.placeholder.com/150"
            alt="Imagem do Usuário"
          />
        </div>

        {/* Informações do Usuário */}
        <div className="ml-8 flex-1 space-y-2">
          {editing ? (
            <>
              <div>
                <label className="block text-gray-600 font-bold">Descrição:</label>
                <textarea
                  name="desc"
                  value={formData.desc}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold">{user.username}</h1>
              <p className="text-gray-600">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-600">
                <strong>Descrição:</strong> {user.desc || "I'm new here!"}
              </p>
            </>
          )}
        </div>

        {/* Botões de Ação */}
        <div>
          {editing ? (
            <div className="space-x-2">
              <button
                onClick={handleSave}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Salvar
              </button>
              <button
                onClick={() => setEditing(false)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancelar
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Editar descrição
            </button>
          )}
        </div>
      </section>

      {/* Seção de Posts */}
      <PostFeed userPosts />

      <section>
        <CriarPost />
      </section>
    </main>
  );
};

export default Perfil;