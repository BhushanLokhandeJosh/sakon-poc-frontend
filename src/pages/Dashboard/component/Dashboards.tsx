import CustomPieChart from "../../../shared/Charts/CustomPieChart";
import Super from "./SuperAdmin";
import Admin from "./Admin";
import User from "./User";

const SuperAdminDashboardComponent = (props: any) => {
  const { loggedInUser } = props;
  if (loggedInUser.type === "SUPERADMIN") {
    return <Super />;
  } else if (loggedInUser.type === "ADMIN") {
    return <Admin />;
  } else if (loggedInUser.type === "USER") {
    return <User />;
  }
  return <></>;
};

export default SuperAdminDashboardComponent;
