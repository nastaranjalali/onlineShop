import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ darkTheme: false });
const ThemeUpdateContext = createContext({ toggle: () => {} });
export function useTheme() {
  return useContext(ThemeContext);
}
export function useUpdateTheme() {
  return useContext(ThemeUpdateContext);
}
export const ThemeContextProvider: React.FC = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(localStorage.mode === "dark");
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    localStorage.setItem("mode", darkTheme ? "dark" : "light");
  }
  return (
    <ThemeContext.Provider value={{ darkTheme }}>
      <ThemeUpdateContext.Provider value={{ toggle: toggleTheme }}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
