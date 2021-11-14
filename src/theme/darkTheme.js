import { createTheme } from "@material-ui/core/styles";
const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#07b377",
      back: "#26a27b",
    },
    secondary: {
      main: "#fafafa",
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
    body1: {
      fontWeight: 400,
      lineHeight: "1.81rem",
      color: "#63637e",
    },
    body2: {
      fontWeight: 600,
      lineHeight: "1.8rem",
      color: "#e6e6e6",
      textAlign: "center",
      fontSize: 16,
    },
    h1: {
      fontSize: 40,
      color: "#63637e",
    },
    h2: {
      fontSize: 28,
      color: "#63637e",
    },
    button: {
      fontWeight: 400,
      lineHeight: 3,
      backgroundColor: "#07b377",
      borderRadius: 10,
      color: "#000",
      "&:hover": {
        backgroundColor: "#ffc",
      },
    },
  },
});

export default darkTheme;