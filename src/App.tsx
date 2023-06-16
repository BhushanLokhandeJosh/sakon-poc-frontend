import { Box } from "@mui/material";

import "./App.css";

import LayoutComponent from "./shared/Navbar";
import CreateUsersContainer from "./pages/User/CreateUser";

function App() {
  return (
    <Box>
      <LayoutComponent>
        <CreateUsersContainer />
      </LayoutComponent>
    </Box>
  );
}

export default App;
