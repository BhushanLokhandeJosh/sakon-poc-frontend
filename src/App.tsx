import React from "react";
import "./App.css";
import CreateConfigContainer from "./pages/CreateConfiguration";
import LayoutComponent from "./shared/Navbar";
import GetAllConfigurations from "./pages/GetAllConfigurations";
import GetAllSchedulers from "./pages/GetAllSchedulers";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        {/* <CreateConfigContainer /> */}
        <GetAllConfigurations />
        {/* <GetAllSchedulers /> */}
      </LayoutComponent>
    </div>
  );
}

export default App;
