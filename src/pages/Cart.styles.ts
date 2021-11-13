import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
  },
  productContainer: { paddingTop: 100 },
  sidebarContainer: {
    position: "fixed",
    [theme.breakpoints.down("md")]: {
      position: "static",
      marginBottom: 50,
    },
    width: "100%",

    right: "5%",
  },
}));

export default useStyles;
