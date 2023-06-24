import React, { useEffect } from "react";
import { useState } from "react";
import "./styles/styles.css";
import {
  useCreateSignup,
  useFetchServiceProviders,
} from "../../../loginsignup-hooks";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import { IFormikProps } from "../../../../shared/types";
import { ISignupPayload } from "../types";
import SignUpUserForm from "./SignUpUserForm";
import { initialSignUpUserValues } from "../../constants";
import { signUpValidationSchema } from "../helpers";

const SignupPageContainer = ({ toggleModal, isOpen: isModalOpen }: any) => {
  const [serviceProviders, setServiceProviders] = useState<
    {
      label: string;
      value: string;
    }[]
  >();

  const { data: services } = useFetchServiceProviders();

  useEffect(() => {
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
  }, [services]);

  const onSuccess = async (values: AxiosResponse) => {
    toast.success("User Signup Succesfully...");
    toggleModal();
  };

  const onError = (values: AxiosError) => {
    toast.error("User Signup Failed...");
    toggleModal();
  };

  const { mutate: createSignupUser } = useCreateSignup({
    onSuccess,
    onError,
  });

  const onSubmit = (values: any) => {
    console.log(values, "values");
    createSignupUser(values);
  };

  return (
    <FormikModalComponent
      isOpen={isModalOpen}
      toggleModal={toggleModal}
      modalTitle={"User Signup"}
      getFormBody={(formik: IFormikProps<ISignupPayload>) => (
        <SignUpUserForm formik={formik} serviceProviders={serviceProviders} />
      )}
      initialValues={initialSignUpUserValues}
      validationSchema={signUpValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default SignupPageContainer;
