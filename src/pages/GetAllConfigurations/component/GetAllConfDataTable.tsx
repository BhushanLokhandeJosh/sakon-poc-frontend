import * as React from "react";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { getAllConfigColumns } from "../constants";
import "./styles/style.css";
import CustomTable from "../../../shared/CustomTable/CustomTable";
import useFetchAllConfigurations from "../../../hooks/useFetchAllConfig";
import SearchBox from "../../../shared/CustomTable/SearchBox";
import FilterListIcon from "@mui/icons-material/FilterList";
import ModalComponent from "../../../shared/ModalComponent/component";
import ConfifurationFilterForm from "./ConfifurationFilterForm";
import { ConfigFilterFormInitialValues } from "../types";
import FormikModalComponent from "../../../shared/FormikModalComponent/component";
import useToggle from "../../../shared/CustomHooks/useToggle";
import { IFormikProps, MAX_WIDTH } from "../../../shared/types";

interface IProps {
  useCustomFetch: any;
}

export default function GetAllConfDataTable({ useCustomFetch }: IProps) {
  const initialValues: any = {
    schedulingStatus: "",
    department: "",
  };

  return (
    <div>
      <CustomTable
        isFilterVisible={true}
        columnHeaders={getAllConfigColumns}
        filterBodyTitle="Filter Configurations"
        useCustomFetch={useCustomFetch}
        initialValues={initialValues}
        getFormFilterBody={(formik: IFormikProps<any>) => {
          return <ConfifurationFilterForm formik={formik} />;
        }}
      />
    </div>
  );
}
