import { Box } from "@mui/material";

import LayoutComponent from "./shared/Navbar";
import CreateSchedulerContainer from "./pages/Scheduler/CreateScheduler";

import CreateConfigurationsContainer from "./pages/Configuration/CreateConfiguration";
import StepContainer from "./pages/Jobs/StepComponent";
import ConfigurationsContainer from "./pages/Configuration/GetAllConfigurations";

import GetAllSchedulersContainer from "./pages/Scheduler/GetAllSchedulers";

function App() {
  return (
    <Box>
      <LayoutComponent>
        {/* <CreateConfigurationsContainer /> */}
        {/* <CreateSchedulerContainer /> */}
        {/* <StepContainer /> */}
        {/* <ConfigurationsContainer /> */}
        <GetAllSchedulersContainer />
      </LayoutComponent>
    </Box>
  );
}

export default App;
