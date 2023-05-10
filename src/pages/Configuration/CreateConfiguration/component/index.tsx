import { Button } from "@mui/material";

import ConfigurationForm from "./ConfigurationForm";

import FormikModalComponent from "../../../../shared/FormikModalComponent/component";

import { initialConfigurationValues, validationSchema } from "../helpers";
import { IConfiguration, IConfigurationFormProps } from "../types";
import { IFormikProps } from "../../../../shared/types";

import "./styles/styles.css";

const CreateConfigurationComponent = (props: IConfigurationFormProps) => {
  const { isOpen, toggleModal, onSubmit } = props;

  return (
    <div>
      <Button
        variant="contained"
        onClick={toggleModal}
        sx={{ margin: "5% 0% 0% 50%" }}
      >
        Create Configuration
      </Button>

      <FormikModalComponent
        isOpen={isOpen}
        toggleModal={toggleModal}
        modalTitle="Create Configuration"
        getFormBody={(formik: IFormikProps<IConfiguration>) => {
          return <ConfigurationForm formik={formik} />;
        }}
        initialValues={initialConfigurationValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        formClassName="form"
      />
    </div>
  );
};

export default CreateConfigurationComponent;
