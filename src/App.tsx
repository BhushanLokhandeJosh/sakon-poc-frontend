import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { API_ROUTES } from "./routes/routes-constants";

import "./App.css";
import LayoutComponent from "./shared/Navbar";
import SideNavBar from "./shared/SideNavBar";

import LoginContainer from "./pages/LoginSignup";
import { useSelector } from "react-redux";

function App() {
  //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const sideBarMenus = [
    {
      text: "Dashboard",
      icon: "icons/grid.svg",
    },
    {
      text: "Admin Profile",
      icon: "icons/user.svg",
    },
    {
      text: "Messages",
      icon: "icons/message.svg",
    },
    {
      text: "Analytics",
      icon: "icons/pie-chart.svg",
    },
    {
      text: "File Manager",
      icon: "icons/folder.svg",
    },
    {
      text: "Orders",
      icon: "icons/shopping-cart.svg",
    },
    {
      text: "Saved Items",
      icon: "icons/heart.svg",
    },
    {
      text: "Settings",
      icon: "icons/settings.svg",
    },
  ];
  return (
    (
    <div className="App">
      <h2>{loggedInUser.type}</h2>
      <Router>
        <Routes>
          {/* <Route path={API_ROUTES.HOME} element={<LoginContainer />} /> */}

          <Route element={<LayoutComponent sideBarMenus={sideBarMenus}/>}>
            <Route path={API_ROUTES.HOME} element={<LoginContainer />} />
          </Route>
        </Routes>
      </Router>
    
    </div>
  )
  );
}

export default App;
