import { Box } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";

import LayoutComponent from "./shared/Navbar";
import { API_ROUTES } from "./routes/routes-constants";
import DepartmentContainer from "./pages/Department/DepartmentListing";

function App() {
  return (
    <Box>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route element={<LayoutComponent />}>
            <Route
              path={API_ROUTES.DEPARTMENT_LIST}
              element={<DepartmentContainer />}
            />
          </Route>
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
