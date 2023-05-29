import { SchedulerColumns } from "../constants";

import "./styles/style.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import { useFetchAllSchedulers } from "../../scheduler-hooks";

const SchedulersDataTable = () => {
  return (
    <CustomTable
      searchConfiguration={{ isSearchBoxVisible: true }}
      columnHeaders={SchedulerColumns}
      useCustomFetch={useFetchAllSchedulers}
      tableClassName="scheduler-table-style"
    />
  );
};

export default SchedulersDataTable;
