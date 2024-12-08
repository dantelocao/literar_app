import React, { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import axios from 'axios'; // Importando o axios


const Register = () => {
  // Gerenciando os estados do formulário
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
 // Função para lidar com o envio do formulário
 const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o envio padrão do formulário (recarregar a página)

    // Validação simples do formulário
    if (!username || !email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    setError(''); // Limpa erros de validação

    try {
      // Enviando os dados para o backend usando o axios
      const response = await axios.post('http://localhost:5000/api/v1/auth/register', {
        username,
        email,
        password,
      });

      // Verificando se a resposta foi bem-sucedida
      if (response.status === 200) {
        // Se tudo der certo, pode redirecionar ou mostrar uma mensagem de sucesso
        alert('Cadastro realizado com sucesso!');
        // Redirecionamento após cadastro, se necessário:
        // window.location.href = '/login';
      } else {
        throw new Error('Erro ao cadastrar. Tente novamente.');
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message || 'Erro desconhecido. Tente novamente.');
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
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={username}
                onChange={(e) => setName(e.target.value)}
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
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirmar Senha
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
