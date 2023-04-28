import React from "react";
import "./App.css";
import CreateConfigContainer from "./pages/CreateConfiguration";
import LayoutComponent from "./shared/Navbar";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        {/* <CreateConfigContainer /> */}
        <CreateSchedulerContainer/>
      </LayoutComponent>
    </div>
  );
}

export default App;
