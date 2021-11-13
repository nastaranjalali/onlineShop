import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { darkTheme, lightTheme } from "./theme/theme";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import { DarkThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
function App() {
  // const toggleThemeMode = (mode: string) => {
  //   if (localStorage.getItem("mode") !== mode)
  //     localStorage.setItem("mode", mode);
  //   else return;
  //   window.location.reload();
  // };
  const { theme } = useContext(DarkThemeContext);

  return (
    <div className="App">
      {theme === "dark" ? (
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Home />
          {console.log("dark theme is rendering")}
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Home />
          {console.log("light theme is rendering")}
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
