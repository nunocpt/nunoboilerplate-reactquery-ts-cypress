import { Outlet } from "react-router-dom";

// This component needs to be tuned in order to integrate widget instead of redirect okta own url

const RequiredAuth = () => {
  return <Outlet />;
};

export default RequiredAuth;
