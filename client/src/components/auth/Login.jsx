import React, { useState } from 'react';
import axios from 'axios';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom'; // Para redirecionar após login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate(); // Usando hook de navegação do React Router

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    
    setError('');
    setLoading(true);

    try {
      // Fazendo a requisição POST para o backend com o email e senha
      const response = await axios.post('http://localhost:5000/api/v1/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        //localStorage.setItem('authToken', response.data.token); // Exemplo de armazenamento do token
        navigate('/'); // Redireciona para a página de dashboard ou página protegida
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Erro desconhecido. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-blue-100">
      <h1 className="text-7xl font-bold text-center text-indigo-700 mt-20">Literar</h1>
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={loading}
              >
                {loading ? 'Entrando...' : 'Entrar'}
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
