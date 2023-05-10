import * as React from "react";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { getAllConfigColumns } from "../constants";
import "./styles/style.css";
import CustomTable from "../../../shared/CustomTable/CustomTable";
import useFetchAllConfigurations from "../../../hooks/useFetchAllConfig";
import SearchBox from "../../../shared/CustomTable/SearchBox";
import FilterBox from "../../../shared/CustomTable/FilterBox";
import FilterListIcon from "@mui/icons-material/FilterList";
import ModalComponent from "../../../shared/ModalComponent/component";
import FilterForm from "./FilterForm";
import { ConfigFilterFormInitialValues } from "../types";

interface IProps {
  useCustomFetch: any;
}

export default function GetAllConfDataTable({ useCustomFetch }: IProps) {
  const [filterData, setFilterData] = React.useState<any>({});
  const initialValues = {
    schedulingStatus: "",
    department: "",
  };

  const handleSubmit = (values: ConfigFilterFormInitialValues) => {
    setFilterData(values);
  };

  return (
    <div>
      <CustomTable
        isFilterVisible={true}
        columnHeader={getAllConfigColumns}
        filterBodyTitle="Filter Configurations"
        useCustomFetch={useCustomFetch}
        filterData={filterData}
        filterBody={
          <FilterForm
            initialValues={initialValues}
            handleSubmit={handleSubmit}
          />
        }
      />
    </div>
  );
}
