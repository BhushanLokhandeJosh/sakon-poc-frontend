import "./App.css";
import LayoutComponent from "./shared/Navbar";
import SideNavBar from "./shared/SideNavBar/SideNavBar";

function App() {
  const sideBarMenus = [
    {
      text: "Dashboard",
      icon: "icons/grid.svg",
    },
    {
      text: "Admin Profile",
      icon: "icons/user.svg",
    },
    {
      text: "Messages",
      icon: "icons/message.svg",
    },
    {
      text: "Analytics",
      icon: "icons/pie-chart.svg",
    },
    {
      text: "File Manager",
      icon: "icons/folder.svg",
    },
    {
      text: "Orders",
      icon: "icons/shopping-cart.svg",
    },
    {
      text: "Saved Items",
      icon: "icons/heart.svg",
    },
    {
      text: "Settings",
      icon: "icons/settings.svg",
    },
  ];
  return (
    <div className="App">
      <LayoutComponent sideBarMenus={sideBarMenus} />
    </div>
  );
}

export default App;
