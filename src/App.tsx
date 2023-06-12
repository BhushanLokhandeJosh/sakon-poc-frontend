import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { NAVIGATION_ROUTES } from "./shared/constants";

import "./App.css";

import Home from "./pages/Home";
import LayoutComponent from "./shared/Navbar";
import SchedulersContainer from "./pages/Scheduler/SchedulersList";
import CreateSchedulerContainer from "./pages/Scheduler/CreateScheduler";

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
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
