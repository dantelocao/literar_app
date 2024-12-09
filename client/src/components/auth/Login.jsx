import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext"; // Corrigido para o caminho correto
import { loginStart, loginSuccess, loginFailure } from "../../context/authActions"; // Importando as actions
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext); // Usando o dispatch do AuthContext
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart()); // Inicia o login (mudando o estado para "em progresso")

    try {
      // Fazendo a requisição de login (substitua com sua API real)
      const response = await axios.post("http://localhost:5000/api/v1/auth/login", auth);

      // Atualizando o estado do usuário após login bem-sucedido
      dispatch(loginSuccess(response.data)); // Salva o usuário no estado global
      localStorage.setItem("user", JSON.stringify(response.data)); // Persistência no localStorage

      navigate("/"); // Redireciona para a página inicial ou outra página após login
    } catch (error) {
      dispatch(loginFailure()); // Caso ocorra erro no login
      alert("Erro no login! Tente novamente.");
    }
  };

  const goToRegister = () => {
    // Função para redirecionar para a página de cadastro
    navigate("/register");
  };

  return (
    <div className="h-screen flex flex-col bg-blue-100">
      <h1 className="text-7xl font-bold text-center text-indigo-700 mt-20">
        Literar
      </h1>
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
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
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
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

          {/* Botão para redirecionar para a página de cadastro */}
          <div className="text-center mt-4">
            <button
              onClick={goToRegister}
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Não tem uma conta? Cadastre-se
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

