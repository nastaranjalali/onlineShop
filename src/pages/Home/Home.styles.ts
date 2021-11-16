import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  "@global": {
    "*::-webkit-scrollbar": {
      backgroundColor: "rgba(0, 0, 0, 0.075)",
      width: 10,
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#07b377",
      borderRadius: 10,
    },
  },
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  productContainer: {
    width: "90%",
    display: "flex",
    flexWrap: "wrap",
  },
});

export default useStyles;
