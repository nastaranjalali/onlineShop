import { Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import MainRoutes from "./MainRoutes";

const AuthRoutes = () => {
  return (
    <>
      <Route path="/login" exact component={Login} />
      <Route path="/home" render={({ match: { url } }) => MainRoutes(url)} />
      <Redirect to="/login" />
    </>
  );
};
export default AuthRoutes;
