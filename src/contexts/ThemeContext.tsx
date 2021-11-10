import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ darkTheme: false, toggleTheme: () => {} });
export function useTheme() {
  return useContext(ThemeContext);
}
export const ThemeContextProvider: React.FC = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(localStorage.mode === "dark");
  console.log({ darkTheme });
  function toggleTheme() {
    localStorage.setItem("mode", darkTheme ? "light" : "dark");

    setDarkTheme(!darkTheme);
  }
  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
