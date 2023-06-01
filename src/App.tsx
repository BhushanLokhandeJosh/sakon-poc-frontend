import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import JobListingContainer from "./pages/Jobs/JobListing/component";
import JobsDetailsContainer from "./pages/Jobs/JobDetails/component";
import LayoutComponent from "./shared/Navbar";
import { useEffect } from "react";
import { GET } from "./services/api/axios";

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
            <Route path="/" element={<JobListingContainer />} />
            <Route path="/job-details/:id" element={<JobsDetailsContainer />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
