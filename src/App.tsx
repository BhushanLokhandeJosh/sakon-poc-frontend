import { Typography } from "@mui/material";
import StepContainer from "./pages/Jobs/StepComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobsDetails from "../src/pages/Jobs/StepComponent/component/JobsDetails";
function App() {
  return (
    <BrowserRouter>
      {/* <Typography sx={{ display: "flex", justifyContent: "center" }}> */}
      <Routes>
        <Route path="/" element={<StepContainer />} />
        <Route path="/jobs/:id" element={<JobsDetails />} />
      </Routes>
      {/* </Typography> */}
    </BrowserRouter>
  );
}

export default App;
