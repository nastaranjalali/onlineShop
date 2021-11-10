import { Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const MainRoutes = (url: string) => {
  return (
    <>
      <Route path={`${url}/cart`} exact component={Cart} />
      <Route path={`${url}/`} exact component={Home} />
    </>
  );
};
export default MainRoutes;
