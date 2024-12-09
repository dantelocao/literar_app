import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const Header = () => {
  const { user} = useContext(AuthContext)


  const navigate = useNavigate();

  const handleNavigate = () => {
    // Redireciona para a página inicial
    navigate('/');

    // Depois de 1 segundo, vai para o perfil
    setTimeout(() => {
      navigate(`/profile/${user.username}`);
    }, 50); 
  };


  return (
    <header className="bg-indigo-600 text-white p-4 shadow-md">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-xl md:text-2xl font-bold text-center md:text-left">Literar</h1>
      <nav className="mt-2 md:mt-0">
        <ul className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-4">
          <li>
            <Link
              to="/"
              className="px-3 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition text-sm md:text-base"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="/books"
              className="px-3 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition text-sm md:text-base"
            >
              Biblioteca
            </a>
          </li>
          <li>
            <button onClick={handleNavigate} 
            className="px-3 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition text-sm md:text-base"
            >
            Perfil
            </button>

          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header