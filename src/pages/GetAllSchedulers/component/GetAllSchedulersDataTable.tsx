import React from "react";
import CustomTable from "../../../shared/CustomTable/CustomTable";
import { getAllSchedulerColumns } from "../constants";

import "./styles/style.css";

interface ISchedulers {
  data: any;
  searchValue: string;
  setSearchValue: Function;
  initialValues: any;
  handleSubmit: any;
}
const GetAllSchedulersDataTable = (props: ISchedulers) => {
  return (
    <div>
      <CustomTable columnHeader={getAllSchedulerColumns} {...props} />
    </div>
  );
};

export default GetAllSchedulersDataTable;
