import useStyles from "./Products.styles";
import { FC, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "../../components/ProductCard";
import Pagination from "@material-ui/lab/Pagination";
import { MemoryRouter, Route } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Props {}
const Products: FC<Props> = () => {
  const classes = useStyles();

  const handleChange = (event: any, value: any) => {
    setPage(value);
    console.log(page);
  };
  const [products, setProducts] = useState([
    {
      name: "dsfsfd",
      price: 10000,
      img: "../../assets/samlePhoto.jpg",
      _id: "ss",
    },
  ]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const addedToast = () => {
    toast.success("added to cart!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      "http://localhost:3001/main/products/paginate?page=" +
        page +
        "&limit=" +
        limit
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setProducts(responseJson.results);
        setPages(responseJson.pages.pages);
        setLoading(false);
        console.log(products);
      });
  }, [page]);
  const addFunc = (name: string, quantity: Number) => {
    fetch("http://localhost:3001/panel/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.token,
      },
      body: JSON.stringify({
        name,
        quantity,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.added) {
          addedToast();
        }
      });
  };
  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.productContainer}>
        {loading ? (
          <span>loading ... </span>
        ) : (
          products.map((product) => {
            // import image from product.img
            console.log(product.img);

            return (
              <ProductCard
                key={product._id}
                title={product.name}
                price={product.price}
                img={product.img}
                addFunc={addFunc}
              />
            );
          })
        )}
      </Grid>
      <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
        <Route>
          {({ location }) => {
            return (
              <Pagination
                className={classes.pagination}
                page={page}
                count={pages}
                color="primary"
                onChange={handleChange}
              />
            );
          }}
        </Route>
      </MemoryRouter>
    </Grid>
  );
};

export default Products;
