import { createContext, useState } from "react";
import img from "../assets/imgs/profile/3.png";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [modal, setModal] = useState(true);
  const [user, setUser] = useState(false);

  const handleLogin = () => {
    setUser({
      name: "Siddharth Goyal",
      img,
    });
  };

  const authValues = { user, setUser, modal, setModal, handleLogin };
  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
