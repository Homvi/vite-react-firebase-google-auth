import { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("Adam");

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.array,
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
