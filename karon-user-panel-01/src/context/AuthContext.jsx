import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Mock user for "logged in" state
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    mobile: '+1 234 567 890',
    address: '123 Luxury Avenue, Beverly Hills',
    pinCode: '90210'
  });

  const login = () => setUser({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    mobile: '+1 234 567 890',
    address: '123 Luxury Avenue, Beverly Hills',
    pinCode: '90210'
  });
  
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
