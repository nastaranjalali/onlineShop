import { Switch, Route, Redirect } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import MainRoutes from "./MainRoutes";

const PanelRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/cart" exact component={Cart} />

      <Route path="/home" render={({ match: { url } }) => MainRoutes(url)} />
      <Redirect to="/" />
    </Switch>
  );
};
export default PanelRoutes;
