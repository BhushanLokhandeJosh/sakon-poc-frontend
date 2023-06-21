import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import { IFormikProps } from "../../../../shared/types";
import { ISignUpModalProps, ISignupPayload } from "../types";
import {
  CREATE_ORGANIZATION_MESSAGE,
  ERROR_MESSAGE,
  GET_ALL_SIGNUP,
  UPDATE_ORGANIZATION_MESSAGE,
  initialSignUpUserValues,
} from "../../constants";
import { signUpValidationSchema } from "../helpers";
import {
  useCreateSignup,
  useFetchServiceProviders,
  useUpdateUserSignUp,
} from "../../signup-hooks";
import { AxiosError, AxiosResponse } from "axios";
import SignUpUserForm from "./SignUpUserForm";

const SignUpModal = ({
  isOpen: isModalOpen,
  toggleModal,
  signupuser,
}: ISignUpModalProps) => {
  const [serviceProviders, setServiceProviders] = useState<
    {
      label: string;
      value: string;
    }[]
  >();

  const { data: services } = useFetchServiceProviders();

  const queryClient = useQueryClient();

  const isEdit = signupuser ? true : false;

  let updateSignupValues;

  useEffect(() => {
    if (!isEdit) {
      let arr: any = [];
      const length = services?.results.length;

      for (let i = 0; i < length; i++) {
        console.log();
        arr.push({
          value: services?.results[i].name,
          label: services?.results[i].name,
        });
      }
      setServiceProviders(arr);
    } else {
      let arr: any = [];
      const length = signupuser.service_providers.length;

      for (let i = 0; i < length; i++) {
        arr.push({
          value: signupuser?.service_providers[i],
          label: signupuser?.service_providers[i],
        });
      }
      setServiceProviders(arr);
    }
  }, [services]);

  if (isEdit) {
    updateSignupValues = {
      id: signupuser.id,
      email: signupuser.email,
      organization: signupuser.organization,
      designation: signupuser.designation,
      department_count: signupuser.department_count,
      service_providers: signupuser.service_providers,
    };
  }

  const onSuccess = async (values: AxiosResponse) => {
    isEdit
      ? toast.success(UPDATE_ORGANIZATION_MESSAGE)
      : toast.success(CREATE_ORGANIZATION_MESSAGE);
    queryClient.invalidateQueries(GET_ALL_SIGNUP);
    toggleModal();
  };

  const onError = (values: AxiosError) => {
    toast.error(ERROR_MESSAGE);
    toggleModal();
  };

  const { mutate: createSignupUser } = useCreateSignup({
    onSuccess,
    onError,
  });

  const { mutate: updateSignupUser } = useUpdateUserSignUp({
    onSuccess,
    onError,
  });

  const onSubmit = (values: any) => {
    console.log(values, "values");
    !isEdit ? createSignupUser(values) : updateSignupUser(values);
  };

  return (
    <FormikModalComponent
      isOpen={isModalOpen}
      toggleModal={toggleModal}
      modalTitle={isEdit ? "Edit Organization" : "Create Organization"}
      getFormBody={(formik: IFormikProps<ISignupPayload>) => (
        <SignUpUserForm formik={formik} serviceProviders={serviceProviders} />
      )}
      initialValues={!isEdit ? initialSignUpUserValues : updateSignupValues}
      validationSchema={signUpValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default SignUpModal;
