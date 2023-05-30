import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";

import LayoutComponent from "./shared/Navbar";
import Home from "./pages/Home";
import CreateSchedulerContainer from "./pages/Scheduler/CreateScheduler";
import SchedulersContainer from "./pages/Scheduler/SchedulersList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route element={<LayoutComponent />}>
            <Route
              path="/createScheduler"
              element={<CreateSchedulerContainer />}
            />
            <Route path="/schedulingList" element={<SchedulersContainer />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
