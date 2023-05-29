import PageComponent from "../../../../shared/PageComponent/PageComponent";
import SchedulersDataTable from "./SchedulersDataTable";

const SchedulersComponent = () => {
  return (
    <PageComponent pageTitle="Schedulers" pageBody={<SchedulersDataTable />} />
  );
};

export default SchedulersComponent;
