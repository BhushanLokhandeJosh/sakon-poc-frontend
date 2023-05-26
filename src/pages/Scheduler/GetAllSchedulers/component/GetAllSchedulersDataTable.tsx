import { getAllSchedulerColumns } from "../constants";

import "./styles/style.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";

interface ISchedulers {
  useCustomFetch: any;
}
function GetAllSchedulersDataTable({ useCustomFetch }: ISchedulers) {
  return (
    <div>
      <CustomTable
        searchConfiguration={{ isSearchBoxVisible: true }}
        columnHeaders={getAllSchedulerColumns}
        useCustomFetch={useCustomFetch}
        tableClassName="table-style"
      />
    </div>
  );
}

export default GetAllSchedulersDataTable;
