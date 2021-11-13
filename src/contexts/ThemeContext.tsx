import React, { useState } from "react";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const DarkThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const DarkThemeProvider: React.FC = ({ children }) => {
  const localTheme: Theme =
    localStorage.getItem("mode") === "light" ? "light" : "dark";
  const [theme, setTheme] = useState<Theme>(localTheme);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("mode", theme);
  };

  return (
    <DarkThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};
