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
import FormikModalComponent from "../../../shared/FormikModalComponent/component";
import useToggle from "../../../shared/CustomHooks/useToggle";
import { IFormikProps, MAX_WIDTH } from "../../../shared/types";
import { InitialValuesProps } from "../../CreateConfiguration/types";

interface IProps {
  useCustomFetch: any;
}

export default function GetAllConfDataTable({ useCustomFetch }: IProps) {
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
  };

  const { isOpen, handleToggle } = useToggle();

  return (
    <div>
      <CustomTable
        isFilterVisible={true}
        columnHeader={getAllConfigColumns}
        filterBodyTitle="Filter Configurations"
        useCustomFetch={useCustomFetch}
        filterData={filterData}
        handleToggle={handleToggle}
        filterBody={
          <FormikModalComponent
            isOpen={isOpen}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            toggleModal={handleToggle}
            modalTitle="filter config"
            formClassName="form-align-style"
            modalClassName="modal-align-style"
            maxwidth={MAX_WIDTH.SM}
            getFormBody={(formik: IFormikProps<any>) => {
              return <FilterForm formik={formik} />;
            }}
            submitButtonLabel="Apply"
          />
          // <FilterForm
          //   initialValues={initialValues}
          //   handleSubmit={handleSubmit}
          // />
        }
      />
    </div>
  );
}
