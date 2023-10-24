import { createContext, useContext, useEffect, useState } from "react";

// const UserAuth = {
//   isLoggedIn: false,
//   user: { name: "", enail: "" } | null,
//   login: (email, password)=> Promise<void>,
// signup: (name, email, password)=> Promise<void>
// logout: ()=> Promise<void>;

// };

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    //fetch if the user's cookie is valid, if yes, skip login
  }, []);

  const login = async (email, password) => {};
  const signup = async (name, email, password) => {};
  const logout = async () => {};

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
