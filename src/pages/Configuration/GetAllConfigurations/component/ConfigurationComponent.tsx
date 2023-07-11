import { Box } from "@mui/material";

import { useFetchConfigurations } from "../../config-hooks";

import { IFormikProps } from "../../../../shared/types";

import { ConfigurationListColumns } from "../constants";
import { configurationInitialValues } from "../../constants";

import PageComponent from "../../../../shared/PageComponent/PageComponent";
import CustomTable from "../../../../shared/CustomTable/CustomTable";
import ConfifurationFilterForm from "./ConfifurationFilterForm";
import { useSelector } from "react-redux";

const ConfigurationComponent = ({
  toggleModal,
  handleEditConfiguration,
}: any) => {
  //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const id = loggedInUser?.id;
 
  return (
    <Box>
      <PageComponent
        pageTitle="Configurations"
        buttonLabel="Create Configuration"
        handleButtonAction={toggleModal}
        pageBody={
          <CustomTable
            filterConfiguration={{
              isFilterVisible: true,
              filterBodyTitle: "Filter Configurations",
              getFormFilterBody: (formik: IFormikProps<any>) => (
                <ConfifurationFilterForm formik={formik} />
              ),
            }}
            searchConfiguration={{ isSearchBoxVisible: true }}
            columnHeaders={ConfigurationListColumns(handleEditConfiguration)}
            useCustomFetch={useFetchConfigurations}
            queryArguments={id}
            initialValues={configurationInitialValues}
          />
        }
      />
    </Box>
  );
};

export default ConfigurationComponent;
