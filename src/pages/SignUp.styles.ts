import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 80,
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    border: "2px solid #07b377",
    borderRadius: 10,
    padding: "40px 30px",
    backgroundColor: "rgba(7, 179, 119,0.1)",
  },
  field: {
    width: "400px",
    padding: 7,
    boxShadow: "none",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "4px solid #07b377",
    height: 38,
    outline: "none",
    marginBottom: 40,
    transition: "300ms",
    "&::placeholder": {
      fontSize: 15,
      color: "rgb(139,139,139)",
      fontFamily: " Nunito, sans-serif",
      fontWeight: 400,
    },
    "&::fucos": {
      outline: "none",
      border: "none",
      borderBottom: "6px solid #07b377",
    },
    "&:hover": {
      borderBottom: "6px solid #07b377",
    },
  },
  signUpBTN: { width: "100%" },
});

export default useStyles;
