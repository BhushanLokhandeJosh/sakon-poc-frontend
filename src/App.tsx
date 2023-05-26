import { Box } from "@mui/material";

import LayoutComponent from "./shared/Navbar";
import CreateSchedulerContainer from "./pages/Scheduler/CreateScheduler";

import CreateConfigurationsContainer from "./pages/Configuration/CreateConfiguration";
import StepContainer from "./pages/Jobs/StepComponent";

function App() {
  return (
    <Box>
      <LayoutComponent>
        {/* <CreateConfigurationsContainer /> */}
        {/* <CreateSchedulerContainer /> */}
        <StepContainer />
      </LayoutComponent>
    </Box>
  );
}

export default App;
