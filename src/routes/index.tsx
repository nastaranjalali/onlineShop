import AuthRoutes from "./AuthRoutes";
import PanelRoutes from "./PanelRoutes";

const Routes = () => {
  const hasAccess = !!localStorage.token;

  return <>{hasAccess ? <PanelRoutes /> : <AuthRoutes />}</>;
};
export default Routes;
