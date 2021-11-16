import React, { useState } from "react";

type AuthContext = {
  token: string | null;
  name: string | null;
  logout: () => void;
  login: (token: string) => void;
  setfullName: (name: string) => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthContext = React.createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [name, setName] = useState<string | null>(localStorage.getItem("name"));

  const logout = () => {
    console.log({ token });

    setToken("");
    localStorage.setItem("token", "");
    setName("name");
    localStorage.setItem("name", "");
  };
  const login = (token: string) => {
    console.log({ token });

    setToken(token);
    localStorage.setItem("token", token);
  };
  const setfullName = (name: string) => {
    console.log({ name });

    setName(name);
    localStorage.setItem("name", name);
  };
  return (
    <AuthContext.Provider value={{ token, logout, login, setfullName, name }}>
      {children}
    </AuthContext.Provider>
  );
};
