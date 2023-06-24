import { API_ROUTES } from "./routes/routes-constants";

import "./App.css";
import LayoutComponent from "./shared/Navbar";

import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import LoginContainer from "./pages/LoginSignup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAutoLogin } from "./services/AuthServices";
import { sideBarMenus } from "./shared/Sidebar/constants";
import { commonNavBarMenus, navBarMenus } from "./shared/Navbar/constants";
import { logoutStart } from "./redux/actions/authActions";
import RequireAuth from "./routes/RequireAuth";
import SignupContainer from "./pages/Signup/SignupList";
import ServiceProvidersContainer from "./pages/ServiceProviders/ServiceProviderList";
import OrganizationsContainer from "./pages/Organization/OrganizationList";
import UserContainer from "./pages/User/UserListing";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  console.log(loggedInUser, "In App");

  const systemUsers = {
    SUPERADMIN: "SUPERADMIN",
    ADMIN: "ADMIN",
    USER: "USER",
  };
  useEffect(() => {
    // console.log(location.pathname);
    // if (location.pathname === "/logout") {
    //   console.log("In Logout Start");
    //   dispatch(logoutStart());
    // }
    checkAutoLogin(dispatch, navigate);
  }, []);

  return (
    <div className="App">
      <LayoutComponent
        sideBarMenus={sideBarMenus}
        navBarMenus={navBarMenus}
        loggedInUser={loggedInUser}
        commonNavBarMenus={commonNavBarMenus}
      >
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/logout" element={<LoginContainer />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            element={<RequireAuth allowedRoles={[systemUsers.SUPERADMIN]} />}
          >
            <Route path="/dashboard" element={<DashBoardContainer />} />
            <Route path={API_ROUTES.SIGNUP} element={<SignupContainer />} />

            <Route
              path={API_ROUTES.ORGANIZATION_LIST}
              element={<OrganizationsContainer />}
            />
          </Route>

          <Route element={<RequireAuth allowedRoles={[systemUsers.ADMIN]} />}>
            <Route path="/dashboard" element={<DashBoardContainer />} />
            <Route
              path={API_ROUTES.DEPARTMENT_LIST}
              element={<DepartmentList />}
            />
          </Route>

          <Route
            element={
              <RequireAuth
                allowedRoles={[systemUsers.ADMIN, systemUsers.SUPERADMIN]}
              />
            }
          >
            <Route
              path={API_ROUTES.USER_LISTING}
              element={<UserContainer loggedInUser={loggedInUser} />}
            />
            <Route
              path={API_ROUTES.SERVICE_PROVIDERS}
              element={<ServiceProvidersContainer />}
            />
          </Route>

          <Route path={API_ROUTES.UNAUTHORIZED} element={<UnAuthorized />} />
        </Routes>
      </LayoutComponent>
    </div>
  );
}

const DepartmentList = () => {
  return <h1>DepartmentList</h1>;
};

const DashBoardContainer = () => {
  return <h1>DashBoard Page</h1>;
};

const UnAuthorized = () => {
  return <h1>UnAuthorized</h1>;
};

const HomePage = () => {
  return <h1>Home Page</h1>;
};
export default App;
