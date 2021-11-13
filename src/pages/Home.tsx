import { FC } from "react";
import ProductCard from "../components/ProductCard";
import { Header } from "../components/Header";
import { Grid } from "@material-ui/core";
import useStyles from "./Home.styles";
import SignUp from "./SignUp";
import Login from "./Login";
import Cart from "./Cart";
import samplePhoto from "../assets/samplePhoto.jpg";
import Products from "./Products";

const Home: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Grid style={{ position: "relative", width: "90%" }}>
        {/* <Cart /> */}
        <Products />
      </Grid>

      {/*<SignUp />*/}
      {/* <Login /> */}
    </div>
  );
};

export default Home;
