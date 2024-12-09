import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../footer/footer';

const Login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados de login:", auth); // Substituir por chamada de API real
  };

  return (
    <div className="h-screen flex flex-col bg-blue-100">
      <h1 className="text-7xl font-bold text-center text-indigo-700 mt-20">Literar</h1>
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={auth.email}
                onChange={(e) =>
                  setAuth((prev) => ({ ...prev, email: e.target.value }))
                }
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
                value={auth.password}
                onChange={(e) =>
                  setAuth((prev) => ({ ...prev, password: e.target.value }))
                }
                placeholder="Digite sua senha"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                minLength={3}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;