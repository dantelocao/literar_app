import React from 'react'
import Slider from 'react-slick'; // Importação do react-slick
import 'slick-carousel/slick/slick.css'; // Estilos do carrossel
import 'slick-carousel/slick/slick-theme.css';

const Carrossel = () => {
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
  )
}

export default Carrossel