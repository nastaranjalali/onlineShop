import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
  },
  productContainer: { paddingLeft: 20, paddingTop: 100 },
  sidebarContainer: {
    position: "fixed",
    right: 10,
  },
});

export default useStyles;
