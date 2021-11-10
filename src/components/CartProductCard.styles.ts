import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 15px",
  },
  card: {
    width: "100%",
    display: "flex",
    overflow: "visible",
    alignItems: "center",
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
  },
  media: {
    width: "25%",
  },

  content: {
    width: "100%",
  },
  iconBTN: {
    position: "absolute",
    right: -35,
    top: 0,
    transition: "300ms",
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,

    "&:hover": {
      color: "#07b377",
      backgroundColor:
        localStorage.getItem("mode") === "dark" ? "#424242" : "#fff",
      right: -40,
    },
  },
}));

export default useStyles;
