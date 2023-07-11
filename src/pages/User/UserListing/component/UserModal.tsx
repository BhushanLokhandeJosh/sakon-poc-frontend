import React, { useEffect, useState } from "react";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import { IFormikProps } from "../../../../shared/types";
import { ADMIN, IUserPayload, SUPER_ADMIN } from "../types";
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
import { Console, log } from "console";
import { useSelector } from "react-redux";

const UserModal = ({
  isOpen: isModalOpen,
  toggleModal,
  user
}: any) => {
   //@ts-ignore
   const { loggedInUser } = useSelector((state) => state.AuthReducer);
   console.log("InEdit",user);

   const empId = loggedInUser?.id;
  const [departmentOptions, SetDepartmentOptions] = useState<
    {
      label: string;
      value: string;
    }[]
  >();

  const [organizationOptions, SetOrganizationOptions] = useState<
    {
      label: number;
      value: string;
    }[]
  >();

  const queryClient = useQueryClient();

  const { data: departments } = useFetchDepartmentList({ emp_id: empId });

  const { data: organizations } = useFetchOrganization();

  const isEdit = user ? true : false;
  console.log("Organization", organizations);

  let updateUserValues;
  let arr1:any = [];
  let arr2:any = [];
  let arr3:any = [];

  const length1 = departments?.length;
  const length2 = organizations?.length;


  useEffect(() => {
    if (!isEdit) {
     
      for (let i = 0; i < length1; i++) {
        arr1.push({
          label: departments[i].name,
          value: departments[i].id,
        });
      }

      for (let i = 0; i < length2; i++) {
        arr2.push({
          label: organizations[i]?.name,
          value: organizations[i]?.id,
        });
      }

      SetDepartmentOptions(arr1);
      SetOrganizationOptions(arr2);
    } else {
      const lengthOfDept = user.Department?.length;

      for (let i = 0; i < lengthOfDept; i++) {
        arr3.push({
          label: user.Department[i],
          value: user.Department[i],
        });
      }

      for (let i = 0; i < length2; i++) {
        arr2.push({
          label: organizations[i]?.name,
          value: organizations[i]?.id,
        });
      }


      SetDepartmentOptions(arr3);
      SetOrganizationOptions(arr2);


    }
  }, [departments, organizations,isEdit]);

  
  if(isEdit) {
      updateUserValues = {
        id: user.id,
        name: user.name,
        email: user.email,
        Department:user.Department,
        role: user.type,
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
    if (!isEdit) {
      if (loggedInUser?.type === ADMIN) {
        delete values.org;
      } else if (loggedInUser?.type === SUPER_ADMIN) {
        delete values.Department;
      }
      values.role = loggedInUser.type;
      console.log("SubmitValues", values);
      createUser(values);
    } else {
      updateUser(values);
    }
  };

  console.log(organizationOptions);
  console.log(departmentOptions);

  return (
    <FormikModalComponent
      isOpen={isModalOpen}
      toggleModal={toggleModal}
      modalTitle={isEdit ? "Edit User" : "Create User"}
      getFormBody={(formik: IFormikProps<IUserPayload>) => (
        <UserForm
          formik={formik}
          departmentOptions={departmentOptions}
          organizationsOptions={organizationOptions}
          isEdit={isEdit}
          loggedInUser={loggedInUser}
        />
      )}
      initialValues={!isEdit ? initialUserValues : updateUserValues}
      validationSchema={userValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default UserModal;
