import AuthRoutes from "./AuthRoutes";
import PanelRoutes from "./PanelRoutes";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const Routes = () => {
  const { token } = useContext(AuthContext);
  const hasAccess = token;

  return <>{hasAccess ? <PanelRoutes /> : <AuthRoutes />}</>;
};
export default Routes;
