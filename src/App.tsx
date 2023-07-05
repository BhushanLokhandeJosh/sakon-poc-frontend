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
import SchedulersContainer from "./pages/Scheduler/SchedulersList";
import ConfigurationsContainer from "./pages/Configuration/GetAllConfigurations";
import JobListingContainer from "./pages/Jobs/JobListing/component";
import DashboardContainer from "./pages/Dashboard";
import JobsDetailsContainer from "./pages/Jobs/JobDetails/component";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);

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
              path={API_ROUTES.DEPARTMENT_LIST}
              element={<DepartmentContainer />}
            />
          </Route>
          <Route element={<RequireAuth allowedRoles={[systemUsers.ADMIN,systemUsers.USER]} />}>
            <Route
              path={API_ROUTES.CONFIGURATION_LIST}
              element={<ConfigurationsContainer />}
            />
            <Route
              path={API_ROUTES.SCHEDULING_LIST}
              element={<SchedulersContainer />}
            />
            <Route 
            path={`${API_ROUTES.JOBS_LIST}${API_ROUTES.JOBS_DETAILS}/:id`}
            element={<JobsDetailsContainer/>}
            />
            <Route 
              path={API_ROUTES.JOBS_LIST}
              element={<JobListingContainer />}
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
              element={<DashboardContainer />}
            />
            <Route
              path={API_ROUTES.USER_LISTING}
              element={<UserContainer />}
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



const UnAuthorized = () => {
  return <h1>UnAuthorized</h1>;
};

export default App;
