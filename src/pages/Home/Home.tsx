import { FC } from "react";
import { Header } from "../../components/Header";
import { Grid } from "@material-ui/core";
import useStyles from "./Home.styles";
import Products from "../Products/Products";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />{" "}
      <Header />
      <Grid style={{ position: "relative", width: "90%" }}>
        <Products />
      </Grid>
    </div>
  );
};

export default Home;
