import DashboardComponent from "./component/Dashboards";

const DashboardContainer = () => {
  const loggedInUser = {
    email: "bhu@gmail.com",
    name: "Bhushan",
    org_id: 7,
    org_name: "Sakon",
    type: "ADMIN",
  };

  //type : SUPERADMIN,ADMIN,USER
  return <DashboardComponent loggedInUser={loggedInUser} />;
};

export default DashboardContainer;
