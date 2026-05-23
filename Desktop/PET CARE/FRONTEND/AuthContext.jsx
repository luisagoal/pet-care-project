import React, { createContext, useReducer } from 'react';

// Estado inicial de la autenticación
const estadoInicial = {
  autenticado: false,
  usuario: null,
  token: null
};

// Función reductora (useReducer) para manejar las acciones del Login
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_EXITOSO':
      return { ...state, autenticado: true, usuario: action.payload.usuario, token: action.payload.token };
    case 'CERRAR_SESION':
      return estadoInicial;
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, estadoInicial);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};