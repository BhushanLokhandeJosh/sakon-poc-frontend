import LayoutComponent from "./shared/Navbar";

import "./App.css";

import CreateSchedulerContainer from "./pages/Scheduler/CreateScheduler";
import GetAllSchedulersContainer from "./pages/Scheduler/GetAllSchedulers";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        <GetAllSchedulersContainer />
        {/* <CreateSchedulerContainer /> */}
      </LayoutComponent>
    </div>
  );
}

export default App;
