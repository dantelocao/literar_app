import React from 'react';
import CriarPost from '../creationPost/Creationpost.jsx';
import Post from '../creationPost/Posts.jsx';
import { getUserProfileData } from '../../utils/api/api.js';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'

const Perfil = () => {
  const { username } = useParams()
  console.log(username)

  useEffect(() => {
    const getUserProfileInfo = async () => {
      try {
        const response = await getUserProfileData()
        console.log(response.data.userInfo)

      } catch (error) {
        console.error('Erro ao buscar dados de usuario:', error);
      }
    };
    getUserProfileInfo()
  }, []);



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
          <h1 className="text-2xl font-bold">Nome do Usuário</h1>
          <p className="text-gray-600"><strong>Email:</strong> usuario@example.com</p>
          <p className="text-gray-600"><strong>Descrição:</strong> Breve descrição sobre o usuário, interesses e hobbies.</p>
        </div>

        {/* Botão de Edição */}
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Editar Informações
          </button>
        </div>
      </section>

      {/* Seção de Posts */}
      <section>
        <CriarPost />
      </section>

    </main>
  );
};

export default Perfil;

