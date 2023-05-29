import ConfifurationFilterForm from "./ConfifurationFilterForm";

import { ConfigurationListColumns } from "../constants";
import { IFormikProps } from "../../../../shared/types";
import "./styles/style.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import { configurationInitialValues } from "../../constants";

import { useFetchConfigurations } from "../../config-hooks";

const ConfigurationDataTable = () => {
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
      useCustomFetch={useFetchConfigurations}
      initialValues={configurationInitialValues}
      tableClassName="table-style"
    />
  );
};
export default ConfigurationDataTable;
