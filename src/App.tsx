import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { NAVIGATION_ROUTES } from "./shared/constants";

import "./App.css";
import LayoutComponent from "./shared/Navbar";
import SchedulersContainer from "./pages/Scheduler/SchedulersList";
import DashboardContainer from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<LayoutComponent />}>
            <Route path="/" element={<DashboardContainer />} />
            <Route
              path={NAVIGATION_ROUTES.SCHEDULING_LIST}
              element={<SchedulersContainer />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
