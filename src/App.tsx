import "./App.css";
import LayoutComponent from "./shared/Navbar";
import GetAllSchedulers from "./pages/GetAllSchedulers";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        <GetAllSchedulers />
      </LayoutComponent>
    </div>
  );
}

export default App;
