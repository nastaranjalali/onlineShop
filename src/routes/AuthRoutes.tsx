import { Route, Redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const AuthRoutes = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Redirect to="/" />
    </>
  );
};
export default AuthRoutes;
