import { Box } from "@mui/material";

import { validationSchema } from "../../CreateConfiguration/helpers";
import { useFetchConfigurations } from "../../config-hooks";

import { IFormikProps } from "../../../../shared/types";
import {
  IConfiguration,
  IConfigurationFormProps,
} from "../../CreateConfiguration/types";

import { ConfigurationListColumns } from "../constants";
import {
  configurationInitialValues,
  initialConfigurationValues,
} from "../../constants";

import PageComponent from "../../../../shared/PageComponent/PageComponent";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import CustomTable from "../../../../shared/CustomTable/CustomTable";
import ConfifurationFilterForm from "./ConfifurationFilterForm";
import ConfigurationForm from "../../CreateConfiguration/component/ConfigurationForm";

const ConfigurationComponent = ({
  onSubmit,
  isOpen,
  handleToggle: toggleModal,
}: IConfigurationFormProps) => {
  return (
    <Box>
      {isOpen && (
        <FormikModalComponent
          isOpen={isOpen}
          toggleModal={toggleModal}
          modalTitle="Create Configuration"
          getFormBody={(formik: IFormikProps<IConfiguration>) => (
            <ConfigurationForm formik={formik} />
          )}
          initialValues={initialConfigurationValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      )}
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
            columnHeaders={ConfigurationListColumns}
            useCustomFetch={useFetchConfigurations}
            initialValues={configurationInitialValues}
          />
        }
      />
    </Box>
  );
};

export default ConfigurationComponent;
