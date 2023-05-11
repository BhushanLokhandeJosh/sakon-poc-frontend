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
import { InitialValuesProps } from "../../CreateConfiguration/types";

interface IProps {
  useCustomFetch: any;
}

export default function GetAllConfDataTable({ useCustomFetch }: IProps) {
  const { isOpen, handleToggle } = useToggle();
  const [filterData, setFilterData] = React.useState<any>({});
  const initialValues: any = {
    schedulingStatus: "",
    department: "",
  };

  const handleSubmit = (values: ConfigFilterFormInitialValues) => {
    setFilterData({
      departmentValue: values?.department,
      schedulingStatusValue: values?.schedulingStatus === "scheduled",
    });
    handleToggle();
  };

  return (
    <div>
      <CustomTable
        isFilterVisible={true}
        columnHeaders={getAllConfigColumns}
        filterBodyTitle="Filter Configurations"
        useCustomFetch={useCustomFetch}
        filterData={filterData}
        toggleFilterModal={handleToggle}
        isOpen={isOpen}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        getFormBody={(formik: IFormikProps<any>) => {
          return <ConfifurationFilterForm formik={formik} />;
        }}
        // filterBody={
        //   <FormikModalComponent
        //     isOpen={isOpen}
        //     initialValues={initialValues}
        //     onSubmit={handleSubmit}
        //     toggleModal={handleToggle}
        //     modalTitle="filter config"
        //     formClassName="form-align-style"
        //     modalClassName="modal-align-style"
        //     maxwidth={MAX_WIDTH.SM}
        //     getFormBody={(formik: IFormikProps<any>) => {
        //       return <ConfifurationFilterForm formik={formik} />;
        //     }}
        //     submitButtonLabel="Apply"
        //   />
        // <FilterForm
        //   initialValues={initialValues}
        //   handleSubmit={handleSubmit}
        // />
        // }
      />
    </div>
  );
}
