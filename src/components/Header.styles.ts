import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottom: "1px solid #07b377",
    position: "fixed",
    top: 0,
    zIndex: 1000,
    backgroundColor:
      localStorage.getItem("mode") === "dark" ? "#282828" : "#e9e9e9",
  },
  container: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartIconBTN: {
    transition: "200ms ease-in",

    "&:hover": {
      color: "#07b377",
      backgroundColor: "transparent",
    },
  },

  cartIcon: {
    fontSize: 40,
  },
  leftNav: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profilelink: {
    verticalAlign: "center",
    display: "flex",
    alignItems: "center",
  },
  usersname: {
    verticalAlign: "center",
    marginRight: 10,
    transition: "200ms ease-in",

    "&:hover": {
      color: "#07b377",
    },
  },
  changeThemeContainer: {
    borderRadius: 50,
    border: "0.5px solid #777",
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  sunIconBTN: {
    borderRadius: 0,
    padding: 6,
    "&:disabled": {
      backgroundColor: "#666",
      color: "#eddb15",
    },
  },
  sunIcon: { fontSize: 20 },
  moonIconBTN: {
    borderRadius: 0,
    padding: 6,

    "&:disabled": {
      backgroundColor: "#666",
      color: "#89acfa",
    },
  },

  moonIcon: { fontSize: 20 },

  notActiveSun: {
    transition: "200ms ease-in",
    "&:hover": {
      color: "#eddb15",
      backgroundColor: "#444",
    },
  },
  notActiveMoon: {
    transition: "200ms ease-in",
    "&:hover": {
      color: "#89acfa",
      backgroundColor: "#444",
    },
  },
  rightNav: {
    display: "flex",
    flexDirection: "row",
  },
  logo: { color: "#07b377", fontWeight: 700 },
});

export default useStyles;
