import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { darkTheme, lightTheme } from "./theme/theme";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { darkTheme: isDarkThemeEnabled } = useTheme();
  // const toggleThemeMode = (mode: string) => {
  //   if (localStorage.getItem("mode") !== mode)
  //     localStorage.setItem("mode", mode);
  //   else return;
  //   window.location.reload();
  // };
  console.log({ isDarkThemeEnabled });
  return (
    <div className="App">
      <Router>
        {isDarkThemeEnabled ? (
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
      </Router>
    </div>
  );
}

export default App;
