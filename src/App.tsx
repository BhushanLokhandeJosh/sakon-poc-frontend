import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Dashboard";
import DashboardContainer from "./pages/Dashboard";
import LayoutComponent from "./shared/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<LayoutComponent />}>
            <Route path="/dashboard" element={<DashboardContainer />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
