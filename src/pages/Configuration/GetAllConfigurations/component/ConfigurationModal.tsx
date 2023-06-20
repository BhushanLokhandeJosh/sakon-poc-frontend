import React from "react";
import {
  IConfiguration,
  IConfigurationFormInfo,
} from "../../CreateConfiguration/types";
import FormikModalComponent from "../../../../shared/FormikModalComponent/component";
import { IFormikProps } from "../../../../shared/types";
import ConfigurationForm from "../../CreateConfiguration/component/ConfigurationForm";
import {
  CONFIGURATION_SUCCESS_MESSAGE,
  CONFIGURATION_UPDATED_MESSAGE,
  GET_ALL_CONFIGURATIONS,
  initialConfigurationValues,
} from "../../constants";
import {
  formDataMapping,
  validationSchema,
} from "../../CreateConfiguration/helpers";
import { useQueryClient } from "react-query";
import {
  useCreateConfiguration,
  useUpdateConfiguration,
} from "../../config-hooks";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const ConfigurationModal = ({
  isOpen: isConfigurationModalOpen,
  toggleModal,
  configuration,
}: IConfigurationFormInfo) => {
  const queryClient = useQueryClient();

  const isEdit = configuration ? true : false;
  let configurationInitialData;

  if (isEdit) {
    configurationInitialData = {
      ...configuration,
      configurationName: configuration?.configurationName,
      department: configuration?.department,
      email: configuration?.email,
      //   password: configuration?.password,
      carrierName: configuration?.carrierName,
      //   sftpLogin: configuration?.sftpLogin,
      //   sftpPassword: configuration?.sftpPassword,
      //   sftpLocation: configuration?.sftpLocation,
      //   downloadPath: configuration?.downloadPath,
      template: configuration?.template,
    };
  }

  const initialConfigurationValue = isEdit
    ? configurationInitialData
    : initialConfigurationValues;

  const onSuccess = (value: AxiosResponse) => {
    isEdit
      ? toast.success(CONFIGURATION_UPDATED_MESSAGE)
      : toast.success(CONFIGURATION_SUCCESS_MESSAGE);

    queryClient.invalidateQueries([GET_ALL_CONFIGURATIONS]);
    toggleModal();
  };

  const onError = (values: AxiosError) => {
    toast.error(values.message); //"Something Went Wrong..."
  };

  const { mutate: createConfiguration } = useCreateConfiguration({
    onSuccess,
    onError,
  });

  const { mutate: updateConfiguration } = useUpdateConfiguration({
    onSuccess,
    onError,
  });

  const onSubmit = (values: IConfiguration) => {
    const formData = formDataMapping(values);
    isEdit ? updateConfiguration(values) : createConfiguration(formData);
  };

  return (
    <FormikModalComponent
      isOpen={isConfigurationModalOpen}
      toggleModal={toggleModal}
      modalTitle="Create Configuration"
      getFormBody={(formik: IFormikProps<IConfiguration>) => (
        <ConfigurationForm formik={formik} />
      )}
      initialValues={initialConfigurationValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default ConfigurationModal;
