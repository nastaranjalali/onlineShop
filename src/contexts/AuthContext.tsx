import React, { useState } from "react";

type AuthContext = {
  token: string;
  logout: () => void;
  login: (token: string) => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthContext = React.createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string>("");
  const logout = () => {
    console.log({ token });

    setToken("");
    localStorage.setItem("mode", "");
  };
  const login = (token: string) => {
    console.log({ token });

    setToken(token);
    localStorage.setItem("token", token);
  };

  return (
    <AuthContext.Provider value={{ token, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};
