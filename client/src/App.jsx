import React from 'react';
import Slider from 'react-slick'; // Importação do react-slick
import './app.css';
import 'slick-carousel/slick/slick.css'; // Estilos do carrossel
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Smartphones grandes
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
      {/* Cabeçalho */}
      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-center md:text-left">Literar</h1>
          <nav className="mt-2 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-4">
              <li>
                <a
                  href="#home"
                  className="px-3 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition text-sm md:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#library"
                  className="px-3 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition text-sm md:text-base"
                >
                  Biblioteca
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="px-3 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition text-sm md:text-base"
                >
                  Comunidade
                </a>
              </li>
              <li>
                <a
                  href="#profile"
                  className="px-3 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition text-sm md:text-base"
                >
                  Perfil
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-grow container mx-auto p-4 sm:p-6">
        {/* Carrossel */}
        <section id="home" className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">
            Bem-vindo ao Literar
          </h2>
          <p className="text-gray-700 text-center sm:text-left">
            Descubra novos livros, conecte-se com leitores e organize sua jornada literária.
          </p>
          <Slider {...settings} className="mt-6">
            <div>
              <div className="card p-4 bg-white shadow rounded-lg text-center">
                <img
                  src="https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg"
                  alt="Livro em Destaque"
                  className="fixed-img mx-auto"
                />
                <h3 className="font-semibold mt-2">Livro em Destaque</h3>
                <p className="text-sm text-gray-600">"A Montanha Mágica" - Thomas Mann</p>
              </div>
            </div>
            <div>
              <div className="card p-4 bg-white shadow rounded-lg text-center">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                  alt="Resenha Popular"
                  className="fixed-img mx-auto"
                />
                <h3 className="font-semibold mt-2">Resenha Popular</h3>
                <p className="text-sm text-gray-600">"Um livro que transforma vidas!"</p>
              </div>
            </div>
            <div>
              <div className="card p-4 bg-white shadow rounded-lg text-center">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                  alt="Sugestões para Você"
                  className="fixed-img mx-auto"
                />
                <h3 className="font-semibold mt-2">Sugestões para Você</h3>
                <p className="text-sm text-gray-600">"Grande Sertão: Veredas" - Guimarães Rosa</p>
              </div>
            </div>
          </Slider>
        </section>

        {/* Biblioteca */}
        <section id="library" className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">
            Minha Biblioteca
          </h2>
          <p className="text-gray-700 mb-4 text-center sm:text-left">
            Gerencie seus livros lidos, wishlist e avaliações.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card p-4 bg-white shadow rounded-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1528207776546-365bb710ee93"
                alt="Dom Casmurro"
                className="fixed-img mx-auto"
              />
              <h3 className="font-bold mt-2">Dom Casmurro</h3>
              <p className="text-sm text-gray-600">Machado de Assis</p>
              <span className="text-xs text-indigo-600 font-medium">Lido</span>
            </div>
            <div className="card p-4 bg-white shadow rounded-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
                alt="1984"
                className="fixed-img mx-auto"
              />
              <h3 className="font-bold mt-2">1984</h3>
              <p className="text-sm text-gray-600">George Orwell</p>
              <span className="text-xs text-indigo-600 font-medium">Desejo</span>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white text-center p-4 text-sm">
        <p>© 2024 Literar. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
