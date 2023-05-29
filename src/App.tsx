import "./App.css";
import LayoutComponent from "./shared/Navbar";
import ConfigurationsContainer from "./pages/Configuration/GetAllConfigurations";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        <ConfigurationsContainer />
      </LayoutComponent>
    </div>
  );
}

export default App;
