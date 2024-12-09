import React, { createContext, useReducer, useEffect } from "react";
import { authReducer } from "./authReducers"

// Estado inicial
const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

// Criando o contexto
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE); // Usando o reducer separado

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

