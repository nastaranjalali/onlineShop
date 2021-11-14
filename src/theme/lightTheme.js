import { createTheme } from "@material-ui/core/styles";

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#07b377",
      back: "#fafafa",
    },
    secondary: {
      main: "#26a27b",
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
    body1: {
      fontWeight: 400,
      lineHeight: "1.81rem",
      color: "#63637e",
    },
    body2: {
      fontWeight: 600,
      lineHeight: "1.8rem",
      color: "#6e6e6e",
      textAlign: "center",
      fontSize: 16,
    },
    h1: {
      fontSize: 40,
      color: "#000",
    },
    h2: {
      color: "#000",
      fontSize: 28,
    },
    button: {
      fontWeight: 400,
      lineHeight: 3,
      backgroundColor: "#07b377",
      borderRadius: 10,
      "&:hover": {
        backgroundColor: "#ffc",
      },
    },
  },
});
export default lightTheme;
