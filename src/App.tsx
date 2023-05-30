import { Box } from "@mui/material";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import CreateConfigurationsContainer from "./pages/Configuration/CreateConfiguration";
import LayoutComponent from "./shared/Navbar";
import ConfigurationsContainer from "./pages/Configuration/GetAllConfigurations";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route element={<LayoutComponent />}>
            <Route
              path="/create-configuration"
              element={<CreateConfigurationsContainer />}
            />
            <Route
              path="get-configurations"
              element={<ConfigurationsContainer />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
