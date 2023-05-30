import CustomTable from "../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../shared/PageComponent/PageComponent";
import { useFetchAllSchedulers } from "../scheduler-hooks";
import { SchedulerColumns } from "./constants";
import "./styles/style.css";

const SchedulersContainer = () => {
  return (
    <PageComponent
      pageTitle="Schedulers"
      pageBody={
        <CustomTable
          searchConfiguration={{ isSearchBoxVisible: true }}
          columnHeaders={SchedulerColumns}
          useCustomFetch={useFetchAllSchedulers}
          tableClassName="scheduler-table-style"
        />
      }
    />
  );
};

export default SchedulersContainer;
