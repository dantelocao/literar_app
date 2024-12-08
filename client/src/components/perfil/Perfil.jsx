import React from 'react';

const Perfil = ({ perfil, livros }) => {
  return (
    <main className="container mx-auto p-8">
      {/* Seção de Informações do Perfil */}
      <section className="bg-gray-100 shadow-lg p-6 rounded-xl mb-12">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-8">
          {/* Imagem de Avatar */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500">
            <img 
              src={perfil.avatar} 
              alt="Avatar" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Detalhes do Perfil */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900">{perfil.nome}</h2>
            <p className="text-lg text-gray-600 mt-2">{perfil.email}</p>
            <p className="text-sm text-gray-500 mt-2">{perfil.bio}</p>
          </div>
        </div>
      </section>

      {/* Seção dos Livros */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Meus Livros</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {livros.map((livro, index) => (
            <div 
              key={index} 
              className="bg-white shadow-xl rounded-lg p-4 text-center transition-transform transform hover:scale-105"
            >
              <img 
                src={livro.imagem} 
                alt={livro.titulo} 
                className="h-40 w-auto mx-auto object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-800">{livro.titulo}</h3>
              <p className="text-sm text-gray-600">{livro.autor}</p>
              <span className="text-xs text-indigo-600 font-medium">{livro.status}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Perfil;
