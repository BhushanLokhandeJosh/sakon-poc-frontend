import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import LayoutComponent from "./shared/Navbar";
import ConfigurationsContainer from "./pages/Configuration/GetAllConfigurations";
import { NAVIGATION_ROUTES } from "./shared/constants";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route element={<LayoutComponent />}>
            <Route
              path={NAVIGATION_ROUTES.CONFIGURATION_LIST}
              element={<ConfigurationsContainer />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
