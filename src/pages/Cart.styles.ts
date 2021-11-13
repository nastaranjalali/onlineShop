import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
  },
  productContainer: { paddingTop: 100 },
  sidebarContainer: {
    position: "fixed",
    right: 0,
  },
});

export default useStyles;
