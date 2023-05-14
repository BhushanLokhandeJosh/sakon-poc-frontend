import React from "react";
import "./App.css";
import LayoutComponent from "./shared/Navbar";
import GetAllConfigurations from "./pages/GetAllConfigurations";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        <GetAllConfigurations />
      </LayoutComponent>
    </div>
  );
}

export default App;
