import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
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
