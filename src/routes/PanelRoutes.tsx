import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import MainRoutes from "./MainRoutes";

const PanelRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" render={({ match: { url } }) => MainRoutes(url)} />
      <Redirect to="/" />
    </Switch>
  );
};
export default PanelRoutes;
