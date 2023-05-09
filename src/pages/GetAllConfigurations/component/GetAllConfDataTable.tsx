import * as React from "react";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { getAllConfigColumns } from "../constants";
import "./styles/style.css";
import CustomTable from "../../../shared/CustomTable/CustomTable";
import useFetchAllConfigurations from "../../../hooks/useFetchAllConfig";
import SearchBox from "../../../shared/SearchBox/SearchBox";
import FilterBox from "../../../shared/FilterBox/FilterBox";
import FilterListIcon from "@mui/icons-material/FilterList";
import ModalComponent from "../../../shared/ModalComponent/component";
import FilterForm from "./FilterForm";
import { ConfigFilterFormInitialValues } from "../types";

interface IProps {
  useCustomFetch: any;
}

export default function GetAllConfDataTable(props: IProps) {
  const initialValues = {
    schedulingStatus: "",
    department: "",
  };

  const handleSubmit = (values: ConfigFilterFormInitialValues) => {
    console.log(values);
  };

  return (
    <div>
      <CustomTable
        isFilterVisible={true}
        columnHeader={getAllConfigColumns}
        filterBodyTitle="Filter Configurations"
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
}
