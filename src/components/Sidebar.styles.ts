import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "98%",
    right: 200,
    marginTop: 140,
  },
  formContainer: {
    border: "2px solid #07b377",
    borderRadius: 5,
    padding: "90px 30px",

    height: "70vh",
  },
  field: {
    width: "100%",
    borderRadius: 3,
    padding: 7,
    boxShadow: "none",
    backgroundColor: "#e6e6e6",
    border: "none",

    height: 38,
    outline: "none",
    marginBottom: 40,
    color: "#fff",
    transition: "300ms",
    fontSize: 14,
    "&::placeholder": {
      fontSize: 18,
      color: "#888",
      fontFamily: " Nunito, sans-serif",
      fontWeight: 400,
    },
    "&::fucos": {
      outline: "none",
      border: "none",
    },
    "&:-webkit-autofill": {
      "-webkitAppearance": "none",
      fontSize: "18px !important",

      "-webkit-background-clip": "text",
      transition: "color 5000s ease-in-out 0s",
    },
  },
  select: { width: "100%", marginBottom: 30 },
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
