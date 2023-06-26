import { API_ROUTES } from "./routes/routes-constants";

import "./App.css";
import LayoutComponent from "./shared/Navbar";

import { Route, Routes, useNavigate } from "react-router-dom";

import LoginContainer from "./pages/LoginSignup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAutoLogin } from "./services/AuthServices";
import { sideBarMenus } from "./shared/Sidebar/constants";
import { commonNavBarMenus, navBarMenus } from "./shared/Navbar/constants";
import RequireAuth from "./routes/RequireAuth";
import SignupContainer from "./pages/Signup/SignupList";
import ServiceProvidersContainer from "./pages/ServiceProviders/ServiceProviderList";
import OrganizationsContainer from "./pages/Organization/OrganizationList";
import UserContainer from "./pages/User/UserListing";
import DepartmentContainer from "./pages/Department/DepartmentListing";
import ContactUs from "./HomePages/ContactUs/component";
import Services from "./HomePages/Services/component";
import Landingpage from "./HomePages/LandingPage/component";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  console.log(loggedInUser, "In App");

  const systemUsers = {
    SUPERADMIN: "SUPERADMIN",
    ADMIN: "ADMIN",
    USER: "USER",
  };

  useEffect(() => {
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
          <Route path={API_ROUTES.HOME} element={<Landingpage />} />
          <Route path={API_ROUTES.CONTACT} element={<ContactUs />} />
          <Route path={API_ROUTES.LOGIN} element={<LoginContainer />} />
          <Route path={API_ROUTES.SERVICES} element={<Services />} />
          <Route path={API_ROUTES.LOGOUT} element={<Landingpage />} />
          <Route
            element={<RequireAuth allowedRoles={[systemUsers.SUPERADMIN]} />}
          >
            <Route path={API_ROUTES.SIGNUP} element={<SignupContainer />} />

            <Route
              path={API_ROUTES.ORGANIZATION_LIST}
              element={<OrganizationsContainer />}
            />
          </Route>
          <Route element={<RequireAuth allowedRoles={[systemUsers.ADMIN]} />}>
            <Route
              path={API_ROUTES.CONFIGURATION_LIST}
              element={<ConfigurationContainer />}
            />
            <Route
              path={API_ROUTES.SCHEDULING_LIST}
              element={<SchedulerContainer />}
            />
            <Route path={API_ROUTES.JOBS_LIST} element={<JobsContainer />} />
            <Route
              path={API_ROUTES.DEPARTMENT_LIST}
              element={<DepartmentContainer />}
            />
          </Route>
          <Route
            element={
              <RequireAuth
                allowedRoles={[
                  systemUsers.ADMIN,
                  systemUsers.SUPERADMIN,
                  systemUsers.USER,
                ]}
              />
            }
          >
            <Route
              path={API_ROUTES.DASHBOARD}
              element={<DashBoardContainer />}
            />
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

const DashBoardContainer = () => {
  return <h1>DashBoard Page</h1>;
};

const UnAuthorized = () => {
  return <h1>UnAuthorized</h1>;
};

const ConfigurationContainer = () => {
  return <h1>Configurations Page</h1>;
};

const SchedulerContainer = () => {
  return <h1>Schedulers Page</h1>;
};

const JobsContainer = () => {
  return <h1>Jobs Page</h1>;
};
export default App;
