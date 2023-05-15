import React from "react";
import CustomTable from "../../../../shared/CustomTable/CustomTable";
import { getAllSchedulerColumns } from "../constants";
import "./styles/style.css";

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
