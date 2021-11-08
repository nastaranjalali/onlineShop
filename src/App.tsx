import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { darkTheme, lightTheme } from "./theme/theme";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  const toggleThemeMode = (mode: string) => {
    if (localStorage.getItem("mode") !== mode)
      localStorage.setItem("mode", mode);
    else return;
    window.location.reload();
  };
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider
          theme={
            localStorage.getItem("mode") === "dark" ? darkTheme : lightTheme
          }
        >
          <CssBaseline />
          <Home toggle={toggleThemeMode} />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
