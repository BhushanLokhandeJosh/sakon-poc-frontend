import React, { useEffect, useMemo, useState } from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import { IFormikProps, IOption } from "../../../../shared/types";
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
  isModalOpen,
  toggleModal,
  signUpUser,
}: ISignUpModalProps) => {
  const [serviceProviders, setServiceProviders] = useState<IOption<string>[]>(
    []
  );

  const { data: services } = useFetchServiceProviders();

  const queryClient = useQueryClient();

  const isEdit = signUpUser ? true : false;

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
      const length = signUpUser.service_providers.length;

      for (let i = 0; i < length; i++) {
        arr.push({
          value: signUpUser?.service_providers[i],
          label: signUpUser?.service_providers[i],
        });
      }
      setServiceProviders(arr);
    }
  }, [services]);

  const updateSignupValues = useMemo(() => {
    if (isEdit) {
      const obj = {
        id: signUpUser.id,
        email: signUpUser.email,
        organization: signUpUser.organization,
        designation: signUpUser.designation,
        department_count: signUpUser.department_count,
        service_providers: signUpUser.service_providers,
      };
      return obj;
    }
  }, [isEdit, signUpUser]);

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

  const signUpProps = isEdit
    ? {
        initialValues: updateSignupValues,
        modalTitle: "Edit Enquiry",
      }
    : {
        initialValues: initialSignUpUserValues,
        modalTitle: "Create Enquiry",
      };

  const onSubmit = (values: ISignupPayload) => {
    !isEdit ? createSignupUser(values) : updateSignupUser(values);
  };

  return (
    <FormikModalComponent
      isOpen={isModalOpen}
      toggleModal={toggleModal}
      {...signUpProps}
      getFormBody={(formik: IFormikProps<ISignupPayload>) => (
        <SignUpUserForm formik={formik} serviceProviders={serviceProviders} />
      )}
      validationSchema={signUpValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default SignUpModal;
