import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: { padding: "15px 20px" },
  card: {
    width: "100%",
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },

  content: {
    position: "relative",
  },
  iconBTN: {
    backgroundColor:
      localStorage.getItem("mode") === "dark" ? "#424242" : "#fff",
    position: "absolute",
    right: 10,
    top: -30,
    transition: "300ms",
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    "&:hover": {
      color: "#07b377",
      backgroundColor:
        localStorage.getItem("mode") === "dark" ? "#424242" : "#fff",
      right: 10,
      top: -35,
    },
  },
});

export default useStyles;
