import React from "react";
import "./App.css";
import CreateConfigContainer from "./pages/CreateConfiguration";
import LayoutComponent from "./shared/Navbar";
import GetAllConfigurations from "./pages/GetAllConfigurations";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        {/* <CreateConfigContainer /> */}
        <GetAllConfigurations />
      </LayoutComponent>
    </div>
  );
}

export default App;
