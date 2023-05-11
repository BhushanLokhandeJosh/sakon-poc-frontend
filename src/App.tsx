import { Typography } from "@mui/material";

import "./App.css";

import CreateConfigurationContainer from "./pages/Configuration/CreateConfiguration";
import LayoutComponent from "./shared/Navbar";

function App() {
  return (
    <Typography>
      <LayoutComponent>
        <CreateConfigurationContainer />
      </LayoutComponent>
    </Typography>
  );
}

export default App;
