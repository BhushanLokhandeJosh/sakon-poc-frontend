import { Box, Button } from "@mui/material";

import { departmentValidationSchema } from "../helpers";
import { IDepartment, IDepartmentFormProps } from "../types";
import { IFormikProps, MAX_WIDTH } from "../../../../shared/types";
import { initialDepartmentValues } from "../../constants";

import "./styles/styles.css";

import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import DepartmentForm from "./DepartmentForm";

const CreateDepartment = (props: IDepartmentFormProps) => {
  const { isOpen, toggleModal, onSubmit } = props;

  return (
    <Box>
      <Button
        variant="contained"
        onClick={toggleModal}
        sx={{ margin: "5% 0% 0% 70%" }}
      >
        Create Department
      </Button>

      {isOpen && (
        <FormikModalComponent
          isOpen={isOpen}
          toggleModal={toggleModal}
          modalTitle="Create Department"
          getFormBody={(formik: IFormikProps<IDepartment>) => (
            <DepartmentForm formik={formik} />
          )}
          showResetButton={true}
          initialValues={initialDepartmentValues}
          validationSchema={departmentValidationSchema}
          onSubmit={onSubmit}
        />
      )}
    </Box>
  );
};

export default CreateDepartment;
