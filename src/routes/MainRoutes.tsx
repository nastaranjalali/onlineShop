import { Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";

const MainRoutes = (url: string) => {
  return (
    <>
      <Route path={`${url}/cart`} exact component={Cart} />
      <Route path={`${url}/`} exact component={Home} />
    </>
  );
};
export default MainRoutes;
