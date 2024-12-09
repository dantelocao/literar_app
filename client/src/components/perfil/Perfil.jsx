import React, { useEffect, useState } from 'react';
import CriarPost from '../creationPost/Creationpost.jsx';
import { useParams } from "react-router-dom";
import { getUserProfileData } from '../../utils/api/api';
import PostFeed from '../booksFeed/PostFeed.jsx';

const Perfil = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
      const response = await fetch("https://sua-api.com/api/v1/users/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser.userInfo);
        setEditing(false);
        alert("Informações atualizadas com sucesso!");
      } else {
        alert("Erro ao atualizar informações.");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
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
                <label className="block text-gray-600 font-bold">Nome:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-bold">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>

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
              Editar Informações
            </button>
          )}
        </div>
      </section>

      {/* Seção de Posts */}
      <PostFeed userPosts={user.posts} />

      <section>
        <CriarPost />
      </section>
    </main>
  );
};

export default Perfil;
