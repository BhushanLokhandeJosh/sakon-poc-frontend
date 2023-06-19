import { Box, Button } from "@mui/material";

import { departmentValidationSchema } from "../helpers";
import { IDepartmentFormProps, IDepartmentPayload } from "../types";
import { IFormikProps } from "../../../../shared/types";
import {
  CREATE_DEPARTMENT_MESSAGE,
  ERROR_MESSAGE,
  GET_ALL_DEPARTMENT,
  UPDATE_DEPARTMENT_MESSAGE,
  initialDepartmentValues,
} from "../../constants";

import "./styles/styles.css";

import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import DepartmentForm from "./DepartmentForm";
import { useQueryClient } from "react-query";
import {
  useCreateDepartment,
  useUpdateDepartment,
} from "../../department-hooks";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const DepartmentModal = (props: IDepartmentFormProps) => {
  const { isOpen, toggleModal, department } = props;

  const queryClient = useQueryClient();

  const isEdit = department ? true : false;

  let updateDepartmentValues;

  if (isEdit) {
    updateDepartmentValues = {
      id: department.id,
      name: department.name,
      org: department.org,
    };
  }

  const onSuccess = async (values: AxiosResponse) => {
    isEdit
      ? toast.success(UPDATE_DEPARTMENT_MESSAGE)
      : toast.success(CREATE_DEPARTMENT_MESSAGE);
    queryClient.invalidateQueries(GET_ALL_DEPARTMENT);
    toggleModal();
  };

  const onError = (values: AxiosError) => {
    toast.error(ERROR_MESSAGE);
    toggleModal();
  };

  const { mutate: createDepartment } = useCreateDepartment({
    onSuccess,
    onError,
  });

  const { mutate: updateDepartment } = useUpdateDepartment({
    onSuccess,
    onError,
  });

  const onSubmit = (values: IDepartmentPayload) => {
    //TODO : THIS ID BELONGS TO LOGGEDIN ADMIN ORAGANIZATIONS.(Hard Coded)
    values.org = "1";
    !isEdit ? createDepartment(values) : updateDepartment(values);
  };

  return (
    <FormikModalComponent
      isOpen={isOpen}
      toggleModal={toggleModal}
      modalTitle="Create Department"
      getFormBody={(formik: IFormikProps<IDepartmentPayload>) => (
        <DepartmentForm formik={formik} />
      )}
      initialValues={!isEdit ? initialDepartmentValues : updateDepartmentValues}
      validationSchema={departmentValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default DepartmentModal;
