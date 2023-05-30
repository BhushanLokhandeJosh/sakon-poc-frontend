import "./App.css";
import LayoutComponent from "./shared/Navbar";
import { Box } from "@mui/material";
import CreateSchedulerContainer from "./pages/Scheduler/CreateScheduler";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createScheduler">
            <LayoutComponent>
              <CreateSchedulerContainer />
            </LayoutComponent>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
