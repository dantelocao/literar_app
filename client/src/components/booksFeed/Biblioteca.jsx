import React, { useState } from 'react';
import '../.././index.css';

const Biblioteca = () => {
  const livros = [
    { titulo: "Dom Casmurro", autor: "Machado de Assis", status: "Lido", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Dom_Casmurro.jpg/220px-Dom_Casmurro.jpg" },
    { titulo: "1984", autor: "George Orwell", status: "Desejo", imagem: "https://upload.wikimedia.org/wikipedia/en/c/c3/1984first.jpg" },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell", status: "Lido", imagem: "https://upload.wikimedia.org/wikipedia/en/f/fb/Animal_Farm_-_1st_edition.jpg" },
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", status: "Desejo", imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Lord_of_the_Rings_cover.gif/220px-The_Lord_of_the_Rings_cover.gif" },
    { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", status: "Lido", imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/OneHundredYearsOfSolitude.jpg/220px-OneHundredYearsOfSolitude.jpg" },
    { titulo: "Moby Dick", autor: "Herman Melville", status: "Lido", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Moby-Dick_FE_title_page.jpg/220px-Moby-Dick_FE_title_page.jpg" },
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", status: "Desejo", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/PrideAndPrejudiceTitlePage.jpg/220px-PrideAndPrejudiceTitlePage.jpg" },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", status: "Lido", imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Littleprince.JPG/220px-Littleprince.JPG" },
    { titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", status: "Lido", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Crimeandpunishmentcover.png/220px-Crimeandpunishmentcover.png" },
    { titulo: "A Metamorfose", autor: "Franz Kafka", status: "Desejo", imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Metamorphosis.jpg/220px-Metamorphosis.jpg" },
  ];

  const [mostrar, setMostrar] = useState(6); // Mostra 6 livros inicialmente.

  const carregarMais = () => {
    setMostrar((prevMostrar) => prevMostrar + 6); // Incrementa 6 por vez.
  };

  return (
    <section id="library" className="my-10 px-4">
      <h2 className="text-2xl font-bold text-center text-indigo-800 mb-4">
        Biblioteca
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Gerencie seus livros lidos, wishlist e avaliações.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {livros.slice(0, mostrar).map((livro, index) => (
          <div
            key={index}
            className="p-2 bg-white shadow rounded-lg text-center transition-transform transform hover:scale-105"
          >
            <div className="w-full h-28 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={livro.imagem}
                alt={livro.titulo}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-2 text-sm font-semibold text-gray-800">
              {livro.titulo}
            </h3>
            <p className="text-xs text-gray-600">{livro.autor}</p>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full inline-block mt-2 ${
                livro.status === "Lido"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {livro.status}
            </span>
          </div>
        ))}
      </div>

      {mostrar < livros.length && (
        <div className="text-center mt-6">
          <button
            onClick={carregarMais}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
          >
            Ver Mais
          </button>
        </div>
      )}
    </section>
  );
};

export default Biblioteca;

