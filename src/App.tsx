import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./shared/constants";
import Home from "./pages/Home";
import CreateSchedulerContainer from "./pages/Scheduler/CreateScheduler";
import SchedulersContainer from "./pages/Scheduler/SchedulersList";
import LayoutComponent from "./shared/Navbar";

import CreateConfigurationsContainer from "./pages/Configuration/CreateConfiguration";
import ConfigurationsContainer from "./pages/Configuration/GetAllConfigurations";
import JobListingContainer from "./pages/Jobs/JobListing/component";
import JobsDetailsContainer from "./pages/Jobs/JobDetails/component";
import { useEffect } from "react";
import { GET } from "./services/api/axios";
import EditSchedule from "./pages/Scheduler/SchedulersList/component/EditSchedule";

const App = () => {
  // useEffect(() => {
  //   GET("/run_thread");
  // }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}

          <Route element={<LayoutComponent />}>
            <Route
              path="/create-configuration"
              element={<CreateConfigurationsContainer />}
            />
            <Route
              path="/" // path="get-configurations"
              element={<ConfigurationsContainer />}
            />
            <Route
              path="/createScheduler"
              element={<CreateSchedulerContainer />}
            />
            <Route path="/schedulingList" element={<SchedulersContainer />} />

            <Route path="/job-listing" element={<JobListingContainer />} />
            <Route
              path="/job-listing/job-details/:id"
              element={<JobsDetailsContainer />}
            />
          </Route>
          <Route path="edit-schedule/:id" element={<EditSchedule />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
