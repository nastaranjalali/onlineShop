import { FC } from "react";
import ProductCard from "../components/ProductCard";
import { Header } from "../components/Header";
import { Grid } from "@material-ui/core";
import useStyles from "./Home.styles";
import SignUp from "./SignUp";
import Login from "./Login";
import Cart from "./Cart";

interface Props {
  toggle: any;
}
const Home: FC<Props> = ({ toggle }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header toggle={toggle} />

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
      <Cart />
    </div>
  );
};

export default Home;