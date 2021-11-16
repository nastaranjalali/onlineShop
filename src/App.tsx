import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App">
      <Router>
        {theme === "dark" ? (
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Routes />
            {console.log("dark theme is rendering    " + localStorage.mode)}
          </ThemeProvider>
        ) : (
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Routes />
            {console.log("light theme is rendering   " + localStorage.mode)}
          </ThemeProvider>
        )}
      </Router>
    </div>
  );
}

export default App;
