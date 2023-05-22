import ConfifurationFilterForm from "./ConfifurationFilterForm";

import { ConfigurationListColumns } from "../constants";
import { IFormikProps } from "../../../../shared/types";
import "./styles/style.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import { configurationInitialValues } from "../../constants";

interface IProps {
  useCustomFetch: any;
}

const ConfigurationDataTable = ({ useCustomFetch }: IProps) => {
  return (
    <CustomTable
      filterConfiguration={{
        isFilterVisible: true,
        filterBodyTitle: "Filter Configurations",
        getFormFilterBody: (formik: IFormikProps<any>) => (
          <ConfifurationFilterForm formik={formik} />
        ),
      }}
      searchConfiguration={{ isSearchBoxVisible: true }}
      columnHeaders={ConfigurationListColumns}
      useCustomFetch={useCustomFetch}
      initialValues={configurationInitialValues}
    />
  );
};
export default ConfigurationDataTable;
