import React from 'react';
import Slider from 'react-slick'; // Importação do react-slick
import 'slick-carousel/slick/slick.css'; // Estilos do carrossel
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'; // Importando o Link para a navegação
import { useEffect, useState } from 'react'
import { getAllBooks, getUserData } from '../../utils/api/api';

const Post = ({ post }) => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await getUserData(post.userId)
        console.log(response.data.userInfo)
        setUser(response.data.userInfo)

      } catch (error) {
        console.error('Erro ao buscar dados de usuario:', error);
      }
    };
    getUserInfo()
  }, [post.userId]);


  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await getAllBooks()
        if (Array.isArray(response.data.allBooks)) {
          setBooks(response.data.allBooks)// Atualiza o estado corretamente
          //console.log(books)
        } else {
          console.error('A chave "data" não é um array');
        }
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };
    getBooks()
  }, []);



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

  const handleDelete = (id) => {
    // Lógica para deletar o post inteiro
    console.log('Deletando o post com ID:', id);
  };

  return (
<section id="home" className="mb-10 px-6 lg:px-16">
  {/* Cabeçalho do Post */}
  <div className="flex items-center mb-6 space-x-4">
    <img
      src={user.profilePicture} 
      alt={post.userName}
      className="w-16 h-16 rounded-full object-cover shadow-md"
    />
    <h2 className="text-2xl font-bold text-indigo-700">
      <Link 
        to={`/profile/${user.username}`} 
        className="hover:text-indigo-900 transition"
      >
        Post de {user.username}
      </Link>
    </h2>
  </div>

  {/* Descrição */}
  <p className="text-gray-800 text-lg leading-relaxed max-w-4xl mb-8">
    {post.desc}
  </p>

  {/* Slider de Livros */}
  <Slider {...settings} className="mt-8">
    <div className="card p-6 bg-white shadow-md rounded-lg text-left">
      <img
        src="https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg"
        alt="Livro em Destaque"
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h3 className="font-bold text-lg text-indigo-700">Livro em Destaque</h3>
      <p className="text-md text-gray-700 mt-2">"A Montanha Mágica" - Thomas Mann</p>
    </div>

    <div className="card p-6 bg-white shadow-md rounded-lg text-left">
      <img
        src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
        alt="Resenha Popular"
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h3 className="font-bold text-lg text-indigo-700">Resenha Popular</h3>
      <p className="text-md text-gray-700 mt-2">"Um livro que transforma vidas!"</p>
    </div>

    <div className="card p-6 bg-white shadow-md rounded-lg text-left">
      <img
        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
        alt="Sugestões para Você"
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h3 className="font-bold text-lg text-indigo-700">Sugestões para Você</h3>
      <p className="text-md text-gray-700 mt-2">"Grande Sertão: Veredas" - Guimarães Rosa</p>
    </div>
  </Slider>
</section>
  );
};

export default Post;
