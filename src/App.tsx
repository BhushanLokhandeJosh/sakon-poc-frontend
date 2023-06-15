import { Box } from "@mui/material";

import "./App.css";

import LayoutComponent from "./shared/Navbar";
import CreateDepartmentContainer from "./pages/Department/CreateDepartment";

function App() {
  return (
    <Box>
      <LayoutComponent>
        <CreateDepartmentContainer />
      </LayoutComponent>
    </Box>
  );
}

export default App;
