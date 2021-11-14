import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  productContainer: {
    marginTop: 100,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  pagination: {
    marginTop: 20,
    marginBottom: 40,
  },
}));

export default useStyles;
