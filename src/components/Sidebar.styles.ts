import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: 100,
  },
  formContainer: {
    width: "100%",
    border: "2px solid #07b377",
    borderRadius: 5,
    padding: "40px 30px",
    backgroundColor:
      localStorage.getItem("mode") === "dark" ? "transparent" : "#07b377",
    height: "82vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  field: {
    width: "100%",
    padding: 7,
    boxShadow: "none",
    backgroundColor: "transparent",
    border: "none",
    borderBottom:
      localStorage.getItem("mode") === "dark"
        ? "4px solid #07b377"
        : "4px solid #046e49",
    height: 38,
    outline: "none",
    marginBottom: 40,
    color: localStorage.getItem("mode") === "dark" ? "#fff" : "#fff",
    transition: "300ms",
    fontSize: 18,
    "&::placeholder": {
      fontSize: 18,
      color: localStorage.getItem("mode") === "dark" ? "#e6e6e6" : "#e6e6e6",
      fontFamily: " Nunito, sans-serif",
      fontWeight: 400,
    },
    "&::fucos": {
      outline: "none",
      border: "none",
      borderBottom:
        localStorage.getItem("mode") === "dark"
          ? "6px solid #07b377"
          : "6px solid #046e49",
    },
    "&:hover": {
      borderBottom:
        localStorage.getItem("mode") === "dark"
          ? "6px solid #07b377"
          : "6px solid #046e49",
    },
    "&:-webkit-autofill": {
      "-webkitAppearance": "none",
      fontSize: "18px !important",
      borderBottom:
        localStorage.getItem("mode") === "dark"
          ? "6px solid #07b377"
          : "6px solid #046e49",
      "-webkit-background-clip": "text",
      transition: "color 5000s ease-in-out 0s",
    },
  },
  select: { width: "100%" },
  signUpBTN: {
    width: "100%",
    backgroundColor:
      localStorage.getItem("mode") === "dark" ? "#07b377" : "#046e49",
    color: localStorage.getItem("mode") === "dark" ? "#fff" : "#fff",
    transition: "300ms",
    "&:hover": {
      backgroundColor:
        localStorage.getItem("mode") === "dark" ? "#222" : "#054730",
    },
  },
});

export default useStyles;
