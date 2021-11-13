import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
  },
  productContainer: {
    marginTop: 100,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
}));

export default useStyles;
