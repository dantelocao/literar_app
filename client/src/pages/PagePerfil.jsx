import React from 'react';

import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';
import Perfil from '../components/perfil/Perfil.jsx';

function PagePerfil() {

    const perfil = {
        nome: "João da Silva",
        email: "joao@email.com",
        bio: "Sou um apaixonado por livros e literatura, sempre em busca de novas histórias para ler e compartilhar.",
        avatar: "https://via.placeholder.com/150"
      };
  
    
      return (
        <>
          <Header />
          <Perfil perfil={perfil} />
          <Footer />
        </>
      );
}

export default PagePerfil;
