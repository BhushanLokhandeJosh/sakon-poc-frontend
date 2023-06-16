import { Box, Button } from "@mui/material";

import { userValidationSchema } from "../helpers";
import { IUserFormProps, IUser } from "../types";
import { IFormikProps } from "../../../../shared/types";
import { initialUserValues } from "../../constants";

import "./styles/styles.css";

import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import UserForm from "./UserForm";

const CreateUser = (props: IUserFormProps) => {
  const { isOpen, toggleModal, onSubmit } = props;

  return (
    <Box>
      <Button
        variant="contained"
        onClick={toggleModal}
        sx={{ margin: "5% 0% 0% 70%" }}
      >
        Create User
      </Button>

      {isOpen && (
        <FormikModalComponent
          isOpen={isOpen}
          toggleModal={toggleModal}
          modalTitle="Create User"
          getFormBody={(formik: IFormikProps<IUser>) => (
            <UserForm formik={formik} />
          )}
          initialValues={initialUserValues}
          validationSchema={userValidationSchema}
          onSubmit={onSubmit}
        />
      )}
    </Box>
  );
};

export default CreateUser;
