import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./shared/constants";

import Home from "./pages/Home";
import CreateSchedulerContainer from "./pages/Scheduler/CreateScheduler";
import SchedulersContainer from "./pages/Scheduler/SchedulersList";
import LayoutComponent from "./shared/Navbar";

import CreateConfigurationsContainer from "./pages/Configuration/CreateConfiguration";
import ConfigurationsContainer from "./pages/Configuration/GetAllConfigurations";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route element={<LayoutComponent />}>
            <Route
              path={NAVIGATION_ROUTES.CREATE_SCHEDULER}
              element={<CreateSchedulerContainer />}
            />
            <Route
              path={NAVIGATION_ROUTES.SCHEDULING_LIST}
              element={<SchedulersContainer />}
            />
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
