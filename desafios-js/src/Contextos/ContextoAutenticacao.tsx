import React, { createContext, useState, useEffect } from 'react';

export const ContextoAutenticacao = createContext({});

export const Provider: React.FC = ({ children }) => {
  const autenticacaoAnterior = window.localStorage.getItem('auth') || false;
  const dadosAutenticacaoAnterior = window.localStorage.getItem('authBody') || null;
  const [authenticated, setAuthenticated] = useState(autenticacaoAnterior);
  const [authBody, setAuthBody] = useState(dadosAutenticacaoAnterior);

  useEffect(
    () => {
      window.localStorage.setItem('authenticated', String(authenticated));
      window.localStorage.setItem('authBody', String(authBody));
    },
    [authenticated, authBody]
  );

  const defaultContext = {
    authenticated,
    setAuthenticated,
    authBody,
    setAuthBody
  };
  return (
    <ContextoAutenticacao.Provider value={defaultContext}>
      {children}
    </ContextoAutenticacao.Provider>
  );
}