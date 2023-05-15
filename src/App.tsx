import React from "react";
import "./App.css";
import LayoutComponent from "./shared/Navbar";
import GetAllConfigurationsContainer from "./pages/Configuration/GetAllConfigurations";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        <GetAllConfigurationsContainer />
      </LayoutComponent>
    </div>
  );
}

export default App;
