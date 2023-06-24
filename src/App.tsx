import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { API_ROUTES } from "./routes/routes-constants";

import "./App.css";

import LayoutComponent from "./shared/Navbar";
import LoginContainer from "./pages/LoginSignup";
import { useSelector } from "react-redux";

function App() {
  //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  return (
    <div className="App">
      <h2>{loggedInUser.type}</h2>
      <Router>
        <Routes>
          {/* <Route path={API_ROUTES.HOME} element={<LoginContainer />} /> */}

          <Route element={<LayoutComponent />}>
            <Route path={API_ROUTES.HOME} element={<LoginContainer />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
