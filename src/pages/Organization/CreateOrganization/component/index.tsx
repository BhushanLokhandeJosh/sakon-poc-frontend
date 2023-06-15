import { Box, Button } from "@mui/material";

import { organizationValidationSchema } from "../helpers";
import { IOrganization, IOrganizationFormProps } from "../types";
import { IFormikProps } from "../../../../shared/types";
import { initialOrganizationValues } from "../../constants";

import "./styles/styles.css";

import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import OrganizationForm from "./OrganizationForm";

const CreateOrganization = (props: IOrganizationFormProps) => {
  const { isOpen, toggleModal, onSubmit } = props;

  return (
    <Box>
      <Button
        variant="contained"
        onClick={toggleModal}
        sx={{ margin: "5% 0% 0% 70%" }}
      >
        Create Organization
      </Button>

      {isOpen && (
        <FormikModalComponent
          isOpen={isOpen}
          toggleModal={toggleModal}
          modalTitle="Create Organization"
          getFormBody={(formik: IFormikProps<IOrganization>) => (
            <OrganizationForm formik={formik} />
          )}
          initialValues={initialOrganizationValues}
          validationSchema={organizationValidationSchema}
          onSubmit={onSubmit}
        />
      )}
    </Box>
  );
};

export default CreateOrganization;
