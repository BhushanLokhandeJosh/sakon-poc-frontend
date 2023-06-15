import { Box } from "@mui/material";

import "./App.css";

import CreateOrganizationsContainer from "./pages/Organization/CreateOrganization";
import LayoutComponent from "./shared/Navbar";

function App() {
  return (
    <Box>
      <LayoutComponent>
        <CreateOrganizationsContainer />
      </LayoutComponent>
    </Box>
  );
}

export default App;
