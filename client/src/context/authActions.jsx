export const loginStart = () => ({
    type: "LOGIN_START",
  });
  
  export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user, // Dados do usuário autenticado
  });
  
  export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
  });
  
  export const logout = () => ({
    type: "LOGOUT",
  });
  
