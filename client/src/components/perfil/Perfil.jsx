import React from 'react';
import CriarPost from '../perfilcomponents/Creationpost.jsx';
import Post from '../perfilcomponents/Posts.jsx';

const Perfil = ({ perfil }) => {
  return (
    <main className="container mx-auto p-8">
      {/* Seção de Informações do Perfil */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="flex items-center bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
                <div className="flex-shrink-0">
                    <img
                        className="h-24 w-24 rounded-full"
                        src="https://via.placeholder.com/150"
                        alt="Imagem do Usuário"
                    />
                </div>
                <div className="ml-4">
                    <h1 className="text-xl font-semibold">Nome do Usuário</h1>
                    <p className="text-gray-600"><strong>Email:</strong> usuario@example.com</p>
                    <p className="text-gray-600"><strong>Telefone:</strong> (11) 91234-5678</p>
                    <p className="text-gray-600"><strong>Bio:</strong> Aqui vai uma breve descrição sobre o usuário. Pode incluir interesses, hobbies, etc.</p>
                </div>
            </div>
        </div>

      {/* Seção dos Posts */}
      <section>
        <Post />
        <Post />
        <Post />
      </section>

      <CriarPost />
    </main>
  );
};

export default Perfil;
