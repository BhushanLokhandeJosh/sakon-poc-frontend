import { BrowserRouter, Route, Routes } from "react-router-dom";

import JobListingContainer from "./pages/Jobs/JobListing/component";
import JobsDetailsContainer from "./pages/Jobs/JobDetails/component";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobListingContainer />} />
        <Route path="/job-details/:id" element={<JobsDetailsContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
