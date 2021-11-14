import React, { useState } from "react";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const DarkThemeProvider: React.FC = ({ children }) => {
  const localTheme: Theme =
    localStorage.getItem("mode") === "light" ? "light" : "dark";
  const [theme, setTheme] = useState<Theme>(localTheme);
  const toggleTheme = () => {
    console.log({ theme });

    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("mode", theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
