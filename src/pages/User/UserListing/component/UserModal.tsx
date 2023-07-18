import React, { useEffect, useMemo, useState } from "react";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import { IFormikProps, IOption } from "../../../../shared/types";
import { ADMIN, IUserResponse } from "../types";
import UserForm from "./UserForm";
import { userValidationSchema } from "../helpers";
import {
  useCreateUser,
  useFetchDepartmentList,
  useFetchOrganization,
  useUpdateUser,
} from "../../user-hooks";
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
import { ROLES } from "../../../../shared/constants";

const UserModal = ({ isOpen: isModalOpen, toggleModal, user }: any) => {
  const [departmentOptions, SetDepartmentOptions] = useState<
    IOption<string>[]
  >();

  const [organizationOptions, SetOrganizationOptions] = useState<
    IOption<string>[]
  >();

  const queryClient = useQueryClient();

  const { data: departments } = useFetchDepartmentList({ org_id: 1 });

  const { data: organizations } = useFetchOrganization();

  const isEdit = user ? true : false;

  const updateUserValues = useMemo(() => {
    if (isEdit) {
      const obj = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department,
        org: user.org,
      };
      return obj;
    }
  }, []);

  useEffect(() => {
    if (!isEdit) {
      let arr1 = [];
      let arr2 = [];

      const length1 = departments?.length;
      const length2 = organizations?.results?.length;

      for (let i = 0; i < length1; i++) {
        arr1.push({
          label: departments[i].name,
          value: departments[i].id,
        });
      }

      for (let i = 0; i < length2; i++) {
        arr2.push({
          label: organizations?.results[i].name,
          value: organizations?.results[i].id,
        });
      }

      SetDepartmentOptions(arr1);
      SetOrganizationOptions(arr2);
    }
  }, [departments, organizations]);

  const userProps = isEdit
    ? {
        initialValue: updateUserValues,
        modalTitle: "Edit User",
      }
    : {
        initialValue: initialUserValues,
        modalTitle: "Create User",
      };

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

  const onSubmit = (values: IUserResponse) => {
    if (!isEdit) {
      if (values.role === ROLES.ADMIN) {
        delete values.org;
      } else if (values.role === ROLES.SUPERADMIN) {
        delete values.department;
      }
      createUser(values);
    } else {
      updateUser(values);
    }
  };

  return (
    <FormikModalComponent
      isOpen={isModalOpen}
      toggleModal={toggleModal}
      modalTitle={userProps.modalTitle}
      getFormBody={(formik: IFormikProps<IUserResponse>) => (
        <UserForm
          formik={formik}
          departmentOptions={departmentOptions}
          organizationsOptions={organizationOptions}
          isEdit={isEdit}
        />
      )}
      initialValues={userProps.initialValue}
      validationSchema={userValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default UserModal;
