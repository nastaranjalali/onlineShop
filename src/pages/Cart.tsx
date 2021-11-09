import useStyles from "./Cart.styles";
import { FC } from "react";
import { Button, Grid } from "@material-ui/core";
import ProductCard from "../components/ProductCard";
import CartProductCard from "../components/CartProductCard";

interface Props {}
const Cart: FC<Props> = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.productContainer}>
        <CartProductCard icon={"e"} />
        <CartProductCard icon={"e"} />
        <CartProductCard icon={"e"} />
        <CartProductCard icon={"e"} />
        <CartProductCard icon={"e"} />
        <CartProductCard icon={"e"} />
        <CartProductCard icon={"e"} />
        <CartProductCard icon={"e"} />
      </Grid>
    </>
  );
};

export default Cart;
