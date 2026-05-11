import { useState } from "react";
import { AutheticationContext } from "./auth.context";

const tokenValue = localStorage.getItem("book-champions-token");

export const AutheticationContextProvider = ({ children }) => {
  const [token, setToken] = useState(tokenValue);

  const handleUserLogin = (newToken) => {
    localStorage.setItem("book-champions-token", newToken);
    setToken(newToken);
  };

  const handleUserLogout = () => {
    localStorage.removeItem("book-champions-token", token);
    setToken(null);
  };
  return (
    <AutheticationContext.Provider
      value={{ token, handleUserLogin, handleUserLogout }}
    >
      {children}
    </AutheticationContext.Provider>
  );
};
