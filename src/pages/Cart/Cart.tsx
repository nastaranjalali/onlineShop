import useStyles from "./Cart.styles";
import { FC, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import CartProductCard from "../../components/CartProductCard";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

interface Props {}
const Cart: FC<Props> = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([
    {
      name: "dsfsfd",
      price: 10000,
      img: "../../assets/samlePhoto.jpg",
      _id: "ss",
      count: 0,
    },
  ]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/panel/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.token,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setProducts(responseJson.products);
        setLoading(false);
        responseJson.products.forEach((element: any) => {
          console.log(
            "price : " +
              element.price +
              " count : " +
              element.count +
              "result : " +
              typeof element.price +
              typeof element.count
          );
          setTotalPrice(totalPrice + element.price * element.count);
          console.log(typeof totalPrice);
        });
      });
  }, [deleted]);
  const deleteFunc = (productID: string) => {
    fetch("http://localhost:3001/panel/cart/" + productID, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.token,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.deleted) {
          setDeleted(!deleted);
        }
      });
  };
  return (
    <Grid container className={classes.root}>
      <Header />
      <Grid item className={classes.productContainer} xs={12} md={7}>
        {loading ? (
          <span>loading ... </span>
        ) : (
          products.map((product) => {
            console.log(product.img);

            return (
              <CartProductCard
                key={product._id}
                title={product.name}
                price={product.price}
                img={product.img}
                productID={product._id}
                deleteFunc={deleteFunc}
                initialValue={product.count}
              />
            );
          })
        )}
      </Grid>
      <Grid item className={classes.sidebarContainer} xs={12} md={4}>
        <Sidebar totalPrice={totalPrice} />
      </Grid>
    </Grid>
  );
};

export default Cart;
