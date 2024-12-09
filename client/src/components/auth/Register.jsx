import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import axios from 'axios'; // Importando o axios
import { toast } from 'react-toastify';
import { authRegister } from '../../utils/api/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'


const Register = () => {
  const [auth, setAuth] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const navigate = useNavigate()

  
 // Função para lidar com o envio do formulário
 const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o envio padrão do formulário (recarregar a página)
    if (auth.confirmPassword !== auth.password) {
        toast.error("digite senhas iguais")

    } else {
      try {
        const res = await authRegister({
          username: auth.username,
          email: auth.email,
          password: auth.password,
        })
        toast.success(res.data.message)
        navigate("/login")
      } catch (error) {
        console.log(error);
        toast.error("error")
      }
    }

  };

  return (
    <div className="h-screen flex flex-col bg-blue-100">
      {/* Título do App Fora do Quadrado Branco */}
      <h1 className="text-7xl font-bold text-center text-indigo-700 mt-10">Literar</h1>

      {/* Register Form */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
          {/* Exibindo erro, se houver */}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nome
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    username: e.target.value
                  })
                }}
                placeholder="Digite seu nome"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    email: e.target.value
                  })
                }}
                placeholder="Digite seu email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Senha
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    password: e.target.value
                  })
                }}
                placeholder="Digite sua senha"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirmar Senha
              </label>
              <input
                type="password"
                id="confirmPassword"
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    confirmPassword: e.target.value
                  })
                }}
                placeholder="Confirme sua senha"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cadastrar
              </button>

              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Ja possui uma conta?
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Register;
