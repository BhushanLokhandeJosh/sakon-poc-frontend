import React from "react";
import "./App.css";
import CreateConfigContainer from "./pages/CreateConfiguration";
import LayoutComponent from "./shared/Navbar";
import CreateSchedulerContainer from "./pages/CreateScheduler";

function App({ children }: any) {
  return (
    <div className="App">
      <LayoutComponent>
        {/* <CreateConfigContainer /> */}
        <CreateSchedulerContainer />
      </LayoutComponent>
    </div>
  );
}

export default App;
