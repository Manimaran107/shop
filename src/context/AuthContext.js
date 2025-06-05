import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const getUserFromStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromStorage());

  const login = (email, password) => {
    // Dummy logic for demonstration (replace with real API)
    if (email && password) {
      const fakeUser = { email };
      setUser(fakeUser);
      localStorage.setItem("user", JSON.stringify(fakeUser));
      return true;
    }
    return false;
  };

  const register = (email, password) => {
    // Dummy logic for demonstration
    if (email && password) {
      const fakeUser = { email };
      setUser(fakeUser);
      localStorage.setItem("user", JSON.stringify(fakeUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);