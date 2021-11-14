import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
  },
  productContainer: {
    marginTop: 100,
    marginLeft: "5%",
    height: "82vh",
    overflow: "auto",
    direction: "rtl",
    padding: 0,
    [theme.breakpoints.down("md")]: {
      marginBottom: 50,
      height: "auto",
    },
  },
  sidebarContainer: {
    [theme.breakpoints.down("md")]: {
      position: "static",
      marginBottom: 50,
    },
    paddingRight: "2%",
    paddingLeft: 20,
  },
}));

export default useStyles;
