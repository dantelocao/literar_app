// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext'; // Importando o contexto de autenticação

const ProtectedRoute = ({ element }) => {
  const { user } = useContext(AuthContext); // Obtendo o estado de autenticação

  if (!user) {
    // Se não houver usuário autenticado, redireciona para a página de login
    return <Navigate to="/login" />;
  }

  // Se o usuário estiver autenticado, renderiza o componente passado
  return element;
};

export default ProtectedRoute;
