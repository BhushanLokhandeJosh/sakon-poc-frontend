import React from "react";
import "./App.css";
import CreateConfigContainer from "./pages/CreateConfiguration";
import LayoutComponent from "./shared/Navbar";
import GetAllConfigurations from "./pages/GetAllConfigurations";
import { Route, Routes } from "react-router-dom";
import FilterBox from "./shared/FilterBox/FilterBox";

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
