import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { API_ROUTES } from "./routes/routes-constants";

import "./App.css";

import Home from "./pages/Home";
import LayoutComponent from "./shared/Navbar";
import SignupContainer from "./pages/Signup/SignupList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route element={<LayoutComponent />}>
            <Route path={API_ROUTES.SIGNUP} element={<SignupContainer />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
