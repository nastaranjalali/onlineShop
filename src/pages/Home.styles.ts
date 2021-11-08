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
    width: "100%",
    padding: 20,
    display: "flex",
    flexWrap: "wrap",
  },
});

export default useStyles;
