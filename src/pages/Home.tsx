import { FC, useContext } from "react";
import ProductCard from "../components/ProductCard";
import { Header } from "../components/Header";
import { Grid } from "@material-ui/core";
import useStyles from "./Home.styles";
import SignUp from "./SignUp";
import Login from "./Login";
import Cart from "./Cart";
import { useTheme } from "../contexts/ThemeContext";

const Home: FC = () => {
  const classes = useStyles();
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <div className={classes.root}>
      <Header />
      <Grid style={{ position: "relative" }}>
        {console.log("theme is : " + darkTheme)}
        <Cart />
      </Grid>
      {/* <Grid className={classes.productContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid> */}
      {/*<SignUp />*/}
      {/* <Login /> */}
    </div>
  );
};

export default Home;
