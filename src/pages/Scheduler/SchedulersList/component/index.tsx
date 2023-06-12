import { useFetchAllSchedulers } from "../../scheduler-hooks";
import { SchedulerColumns } from "../constants";

import "./styles/style.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";

const SchedulersComponent = () => {
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

export default SchedulersComponent;
