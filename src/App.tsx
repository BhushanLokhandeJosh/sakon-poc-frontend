import CreateConfigContainer from "./pages/Configuration/CreateConfiguration";
import LayoutComponent from "./shared/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        <CreateConfigContainer />
      </LayoutComponent>
    </div>
  );
}

export default App;
