import React from "react";
import CustomTable from "../../../shared/CustomTable/CustomTable";
import { getAllSchedulerColumns } from "../constants";

import "./styles/style.css";
import FilterForm from "../../../shared/FilterBox/FilterForm";

interface ISchedulers {
  data: any;
  searchValue: string;
  setSearchValue: Function;
  initialValues: any;
  handleSubmit: any;
}
const GetAllSchedulersDataTable = (props: ISchedulers) => {
  const { initialValues, handleSubmit } = props;

  return (
    <div>
      <CustomTable
        columnHeader={getAllSchedulerColumns}
        filterBody={
          <FilterForm
            initialValues={initialValues}
            handleSubmit={handleSubmit}
          />
        }
        {...props}
      />
    </div>
  );
};

export default GetAllSchedulersDataTable;
