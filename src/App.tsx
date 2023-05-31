import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import JobListingContainer from "./pages/Jobs/JobListing/component";
import JobsDetailsContainer from "./pages/Jobs/JobDetails/component";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/" element={<JobListingContainer />} />
          <Route path="/job-details/:id" element={<JobsDetailsContainer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
