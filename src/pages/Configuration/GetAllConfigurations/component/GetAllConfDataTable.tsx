import ConfifurationFilterForm from "./ConfifurationFilterForm";

import { getAllConfigColumns } from "../constants";
import { IFormikProps } from "../../../../shared/types";
import "./styles/style.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";

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
