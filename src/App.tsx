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
import SignupContainer from "./pages/Signup/SignupList";
import ServiceProvidersContainer from "./pages/ServiceProviders/ServiceProviderList";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  console.log(loggedInUser, "In App");

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
          <Route path={API_ROUTES.SIGNUP} element={<SignupContainer />} />
          <Route
            path={API_ROUTES.SERVICE_PROVIDERS}
            element={<ServiceProvidersContainer />}
          />
        </Routes>
      </LayoutComponent>
    </div>
  );
}

const HomePage = () => {
  return <h1>Home Page</h1>;
};

export default App;
