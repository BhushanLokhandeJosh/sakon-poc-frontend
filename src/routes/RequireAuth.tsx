import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_ROUTES } from "./routes-constants";

const RequireAuth = ({ allowedRoles }: any) => {
  //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const location = useLocation();
  console.log("Allowed", allowedRoles);
  console.log(loggedInUser?.type, "In Require");
  //Outlet Component refers to any child component of RequireAuth Component.

  return allowedRoles?.includes(loggedInUser?.type) ? (
    //@ts-ignore
    <Outlet />
  ) : loggedInUser?.type ? (
    //@ts-ignore
    <Navigate to={API_ROUTES.UNAUTHORIZED} state={{ from: location }} replace />
  ) : (
    //@ts-ignore
    // <Navigate to={API_ROUTES.LOGIN} state={{ from: location }} replace />
    <Outlet />
  );
};

export default RequireAuth;
