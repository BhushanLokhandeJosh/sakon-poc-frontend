import { Button } from "@mui/material";

import { validationSchema } from "../helpers";
import { IConfiguration, IConfigurationFormProps } from "../types";
import { IFormikProps } from "../../../../shared/types";
import { initialConfigurationValues } from "../../constants";

import "./styles/styles.css";

import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import ConfigurationForm from "./ConfigurationForm";

const CreateConfiguration = (props: IConfigurationFormProps) => {
  const { isOpen, toggleModal, onSubmit } = props;

  return (
    <div>
      <Button
        variant="contained"
        onClick={toggleModal}
        sx={{ margin: "5% 0% 0% 70%" }}
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
          formClassName="form"
        />
      )}
    </div>
  );
};

export default CreateConfiguration;
