import LayoutComponent from "./shared/Navbar";

import "./App.css";

import CreateSchedulerContainer from "./pages/Scheduler/CreateScheduler";
import SchedulersContainer from "./pages/Scheduler/SchedulersList";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        <SchedulersContainer />
        {/* <CreateSchedulerContainer /> */}
      </LayoutComponent>
    </div>
  );
}

export default App;
