import React, { useEffect } from "react";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import { IFormikProps } from "../../../../shared/types";
import { IUserPayload } from "../types";
import UserForm from "./UserForm";
import { userValidationSchema } from "../helpers";
import { useCreateUser, useUpdateUser } from "../../organization-hooks";
import {
  CREATE_USER_MESSAGE,
  ERROR_MESSAGE,
  GET_ALL_USER,
  UPDATE_USER_MESSAGE,
  initialUserValues,
} from "../../constants";
import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";
import { useQueryClient } from "react-query";

const UserModal = ({ isOpen: isModalOpen, toggleModal, user }: any) => {
  const queryClient = useQueryClient();

  const isEdit = user ? true : false;

  let updateUserValues;

  if (isEdit) {
    updateUserValues = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      department: user.department,
      org: user.org,
    };
  }

  const onSuccess = async (values: AxiosResponse) => {
    isEdit
      ? toast.success(UPDATE_USER_MESSAGE)
      : toast.success(CREATE_USER_MESSAGE);
    queryClient.invalidateQueries(GET_ALL_USER);
    toggleModal();
  };

  const onError = (values: AxiosError) => {
    toast.error(ERROR_MESSAGE);
    toggleModal();
  };

  const { mutate: createUser } = useCreateUser({
    onSuccess,
    onError,
  });

  const { mutate: updateUser } = useUpdateUser({
    onSuccess,
    onError,
  });

  const onSubmit = (values: any) => {
    !isEdit ? createUser(values) : updateUser(values);
  };
  return (
    <FormikModalComponent
      isOpen={isModalOpen}
      toggleModal={toggleModal}
      modalTitle={isEdit ? "Edit User" : "Create User"}
      getFormBody={(formik: IFormikProps<IUserPayload>) => (
        <UserForm formik={formik} />
      )}
      initialValues={!isEdit ? initialUserValues : updateUserValues}
      validationSchema={userValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default UserModal;
