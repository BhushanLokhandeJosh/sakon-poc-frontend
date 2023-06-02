import { useNavigate } from "react-router-dom";

import ConfigurationDataTable from "./ConfigurationDataTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import { Box, Button } from "@mui/material";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import { IFormikProps } from "../../../../shared/types";
import ConfigurationForm from "../../CreateConfiguration/component/ConfigurationForm";
import { initialConfigurationValues } from "../../constants";
import {
  IConfiguration,
  IConfigurationFormProps,
} from "../../CreateConfiguration/types";
import { validationSchema } from "../../CreateConfiguration/helpers";

const GetAllConfigurations = (props: IConfigurationFormProps) => {
  const { isOpen, toggleModal, onSubmit } = props;
  return (
    <Box>
      <Button
        variant="contained"
        onClick={toggleModal}
        sx={{ margin: "2% 0% -2% 73%" }}
      >
        Create Configuration
      </Button>

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
        // buttonLabel="Create Configuration"
        pageBody={<ConfigurationDataTable />}
      />
    </Box>
  );
};

export default GetAllConfigurations;
