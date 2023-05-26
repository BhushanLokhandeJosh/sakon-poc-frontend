import { Box } from "@mui/material";

import "./App.css";

import CreateConfigurationsContainer from "./pages/Configuration/CreateConfiguration";
import LayoutComponent from "./shared/Navbar";

function App() {
  return (
    <Box>
      <LayoutComponent>
        <CreateConfigurationsContainer />
      </LayoutComponent>
    </Box>
  );
}

export default App;
