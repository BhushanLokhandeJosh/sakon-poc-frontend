import React from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import { IFormikProps } from "../../../../shared/types";
import { IServiceProvidersPayload, IServiceProvidersProps } from "../types";

import {
  CREATE_SERVICE_PROVIDER_MESSAGE,
  ERROR_MESSAGE,
  GET_ALL_SERVICE_PROVIDERS,
  UPDATE_SERVICE_PROVIDER_MESSAGE,
  initialServiceProviderValues,
} from "../../constants";
import {
  useCreateServiceProviders,
  useUpdateServiceProviders,
} from "../../organization-hooks";
import { AxiosError, AxiosResponse } from "axios";
import { serviceProviderValidationSchema } from "../helpers";
import ServiceProviderForm from "./ServiceProviderForm";

const ServiceProviderModal = ({
  isOpen: isModalOpen,
  toggleModal,
  serviceProvider,
}: IServiceProvidersProps) => {
  console.log("serviceProvider", serviceProvider);

  const queryClient = useQueryClient();

  const isEdit = serviceProvider ? true : false;

  let updateServiceProviderValues;

  if (isEdit) {
    updateServiceProviderValues = {
      id: serviceProvider.id,
      name: serviceProvider.name,
      url: serviceProvider.url,
    };
  }

  const onSuccess = async (values: AxiosResponse) => {
    isEdit
      ? toast.success(UPDATE_SERVICE_PROVIDER_MESSAGE)
      : toast.success(CREATE_SERVICE_PROVIDER_MESSAGE);
    queryClient.invalidateQueries(GET_ALL_SERVICE_PROVIDERS);
    toggleModal();
  };

  const onError = (values: AxiosError) => {
    toast.error(ERROR_MESSAGE);
    toggleModal();
  };

  const { mutate: createServiceProviders } = useCreateServiceProviders({
    onSuccess,
    onError,
  });

  const { mutate: updateServiceProviders } = useUpdateServiceProviders({
    onSuccess,
    onError,
  });

  const onSubmit = (values: any) => {
    !isEdit ? createServiceProviders(values) : updateServiceProviders(values);
  };

  return (
    <FormikModalComponent
      isOpen={isModalOpen}
      toggleModal={toggleModal}
      modalTitle={isEdit ? "Edit Organization" : "Create Organization"}
      getFormBody={(formik: IFormikProps<IServiceProvidersPayload>) => (
        <ServiceProviderForm formik={formik} />
      )}
      initialValues={
        !isEdit ? initialServiceProviderValues : updateServiceProviderValues
      }
      validationSchema={serviceProviderValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default ServiceProviderModal;
