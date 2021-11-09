import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: { padding: "10px 15px" },
  card: {
    width: "100%",
    display: "flex",
    overflow: "visible",
    alignItems: "center",
    position: "relative",
  },
  media: {
    width: "25%",
  },

  content: {
    width: "100%",
  },
  iconBTN: {
    backgroundColor:
      localStorage.getItem("mode") === "dark" ? "#424242" : "#fff",
    position: "absolute",
    right: -35,
    top: 0,
    transition: "300ms",
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    boxShadow: localStorage.getItem("mode") === "dark" ? "" : "1px 0 0 #ddd",

    "&:hover": {
      color: "#07b377",
      backgroundColor:
        localStorage.getItem("mode") === "dark" ? "#424242" : "#fff",
      right: -40,
    },
  },
});

export default useStyles;
