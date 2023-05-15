import { Box } from "@mui/material";

import LayoutComponent from "./shared/Navbar";
import CreateSchedulerContainer from "./pages/Scheduler/CreateScheduler";


function App() {
  return (
    <Box>
      <LayoutComponent>
        <CreateSchedulerContainer />
      </LayoutComponent>
    </Box>
  );
}

export default App;
