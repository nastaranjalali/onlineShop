import { Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MainRoutes from "./MainRoutes";

const AuthRoutes = () => {
  return (
    <>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />

      <Redirect to="/login" />
    </>
  );
};
export default AuthRoutes;