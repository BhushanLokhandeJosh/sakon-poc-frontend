import React from "react";
import "./App.css";
import LayoutComponent from "./shared/Navbar";
import GetAllConfigurations from "./pages/GetAllConfigurations";
import { Route, Routes } from "react-router-dom";
import FilterBox from "./shared/FilterBox/FilterBox";

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
