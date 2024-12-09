import React, { createContext, useReducer, useEffect } from "react";
import { authReducer } from "./authReducers"; // Importando o reducer

// Estado inicial
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null, // Recupera o usuário do localStorage, se existir
  isFetching: false,
  error: false,
};

// Criando o contexto
export const AuthContext = createContext(INITIAL_STATE);

// Provedor do contexto
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE); // Usando o reducer separado

  // Efeito para persistir no localStorage
  useEffect(() => {
    if (state.user) {
      // Quando o usuário se autentica, salva os dados no localStorage
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      // Quando o usuário faz logout, remove os dados do localStorage
      localStorage.removeItem("user");
    }
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch, // Disponibilizando o dispatch para os componentes filhos
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

