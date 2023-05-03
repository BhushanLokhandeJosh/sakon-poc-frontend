import React from "react";
import "./App.css";
import LayoutComponent from "./shared/Navbar";
import CreateSchedulerContainer from "./pages/CreateScheduler";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        <CreateSchedulerContainer />
      </LayoutComponent>
    </div>
  );
}

export default App;
