import React from 'react';

import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';
import Perfil from '../components/perfil/Perfil.jsx';

function PagePerfil() {

    const perfil = {
        nome: "João da Silva",
        email: "joao@email.com",
        bio: "Sou um apaixonado por livros e literatura, sempre em busca de novas histórias para ler e compartilhar.",
      };
    
      const livros = [
        {
          titulo: "Dom Casmurro",
          autor: "Machado de Assis",
          imagem: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
          status: "Lido",
        },
        {
          titulo: "1984",
          autor: "George Orwell",
          imagem: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
          status: "Desejo",
        },
        {
          titulo: "O Hobbit",
          autor: "J.R.R. Tolkien",
          imagem: "https://images.unsplash.com/photo-1549153978-0de02120b244",
          status: "Lido",
        },
        {
          titulo: "A Revolução dos Bichos",
          autor: "George Orwell",
          imagem: "https://images.unsplash.com/photo-1528207759742-f62d46acb393",
          status: "Lido",
        },
      ];
    
      return (
        <>
          <Header />
          <Perfil perfil={perfil} livros={livros} />
          <Footer />
        </>
      );
}

export default PagePerfil;
