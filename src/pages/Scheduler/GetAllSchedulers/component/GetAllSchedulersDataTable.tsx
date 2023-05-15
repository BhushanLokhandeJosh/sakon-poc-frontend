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
        isFilterVisible={false}
        columnHeaders={getAllSchedulerColumns}
        useCustomFetch={useCustomFetch}
      />
    </div>
  );
}

export default GetAllSchedulersDataTable;
