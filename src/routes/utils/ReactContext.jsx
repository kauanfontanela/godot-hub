import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(); // Criando o contexto do usuário

export const useUser = () => useContext(UserContext); // Hook personalizado para acessar o contexto

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado inicial do usuário

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
