import { useSelector } from "react-redux";
import DashboardComponent from "./component/Dashboards";

const DashboardContainer = () => {
   //@ts-ignore
   const { loggedInUser } = useSelector((state) => state.AuthReducer);

  //type : SUPERADMIN,ADMIN,USER
  return <DashboardComponent loggedInUser={loggedInUser} />;
};

export default DashboardContainer;
