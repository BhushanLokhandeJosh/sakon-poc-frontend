import { Typography } from "@mui/material";
import StepContainer from "./pages/Jobs/StepComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobsDetails from "../src/pages/Jobs/StepComponent/component/JobsDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StepContainer />} />
        <Route path="/jobs/:id" element={<JobsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
