import "./App.css";
import LayoutComponent from "./shared/Navbar";
import GetAllSchedulersContainer from "./pages/Scheduler/GetAllSchedulers";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        <GetAllSchedulersContainer />
      </LayoutComponent>
    </div>
  );
}

export default App;
