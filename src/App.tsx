import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import LayoutComponent from "./shared/Navbar";
import { sideBarMenus } from "./shared/Sidebar/constants";
import LoginContainer from "./pages/LoginSignup";
import { commonNavBarMenus, navBarMenus } from "./shared/Navbar/constants";

import { checkAutoLogin } from "./services/AuthServices";
import { IRootState } from "./redux/reducer/rootReducer";
import { API_ROUTES } from "./routes/routes-constants";
import { Box } from "@mui/material";

import LayoutComponent from "./shared/Navbar";
import ConfigurationsContainer from "./pages/Configuration/GetAllConfigurations";
import { NAVIGATION_ROUTES } from "./shared/constants";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUser } = useSelector(
    (state: IRootState) => state.AuthReducer
  );

  //This is for auto login when user clicks on page refresh and based on
  //user loggedin or not we will navigate to login page or requested page.
  useEffect(() => {
    checkAutoLogin(dispatch, navigate);
  }, []);

  return (
    <LayoutComponent
      sideBarMenus={sideBarMenus}
      navBarMenus={navBarMenus}
      loggedInUser={loggedInUser}
      commonNavBarMenus={commonNavBarMenus}
    >
      <Routes>
        <Route path={API_ROUTES.LOGIN} element={<LoginContainer />} />
        <Route path={API_ROUTES.LOGOUT} element={<LoginContainer />} />

          <Route element={<LayoutComponent />}>
            <Route
              path={NAVIGATION_ROUTES.CONFIGURATION_LIST}
              element={<ConfigurationsContainer />}
            />
          </Route>
      </Routes>
    </LayoutComponent>
  );
}

export default App;
