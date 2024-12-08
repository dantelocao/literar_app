import React from 'react';
import '../.././index.css'

const Biblioteca = () => {
  const livros = [
    { 
      titulo: "Dom Casmurro", 
      autor: "Machado de Assis", 
      status: "Lido", 
      imagem: "https://images.unsplash.com/photo-1528207776546-365bb710ee93" 
    },
    { 
      titulo: "1984", 
      autor: "George Orwell", 
      status: "Desejo", 
      imagem: "https://images.unsplash.com/photo-1519681393784-d120267933ba" 
    },
    { 
      titulo: "A Revolução dos Bichos", 
      autor: "George Orwell", 
      status: "Lido", 
      imagem: "https://images.unsplash.com/photo-1512820790803-83ca734da794" 
    },
    { 
      titulo: "O Senhor dos Anéis", 
      autor: "J.R.R. Tolkien", 
      status: "Desejo", 
      imagem: "https://images.unsplash.com/photo-1556228578-d9629ef6486b" 
    },
    { 
      titulo: "Cem Anos de Solidão", 
      autor: "Gabriel García Márquez", 
      status: "Lido", 
      imagem: "https://images.unsplash.com/photo-1512427691650-d09754a42429" 
    },
  ];

  return (
    <section id="library" className="mb-10 px-4">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">
        Minha Biblioteca
      </h2>
      <p className="text-gray-700 mb-4 text-center sm:text-left">
        Gerencie seus livros lidos, wishlist e avaliações.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {livros.map((livro, index) => (
          <div 
            key={index} 
            className="card p-4 bg-white shadow rounded-lg text-center"
          >
            <img
              src={livro.imagem}
              alt={livro.titulo}
              className="h-40 w-full object-cover rounded"
            />
            <h3 className="font-bold mt-2 text-sm md:text-lg">{livro.titulo}</h3>
            <p className="text-xs md:text-sm text-gray-600">{livro.autor}</p>
            <span className="text-xs text-indigo-600 font-medium">{livro.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Biblioteca;



