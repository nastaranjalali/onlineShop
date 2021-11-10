import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "../pages/Profile";
import MainRoutes from "./MainRoutes";

const PanelRoutes = () => {
  return (
    <Switch>
      <Route path="/profile" exact component={Profile} />
      <Route path="/home" render={({ match: { url } }) => MainRoutes(url)} />
      <Redirect to="/profile" />
    </Switch>
  );
};
export default PanelRoutes;
