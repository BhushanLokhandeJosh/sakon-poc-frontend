import CustomPieChart from "../../../shared/Charts/CustomPieChart";
import Super from "./SuperAdmin";
import Admin from "./Admin";
import User from "./User";
import { ADMIN, SUPER_ADMIN, USER } from "../../User/UserListing/types";

const SuperAdminDashboardComponent = (props: any) => {
  console.log("In SuperAdminDashboardComponent")
  const { loggedInUser } = props;
  if (loggedInUser.type === SUPER_ADMIN) {
    return <Super />;
  } else if (loggedInUser.type === ADMIN) {
    return <Admin />;
  } else if (loggedInUser.type === USER) {
    return <User />;
  }
  return <></>;
};

export default SuperAdminDashboardComponent;
