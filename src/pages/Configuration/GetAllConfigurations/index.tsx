import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";

import { formDataMapping } from "../CreateConfiguration/helpers";
import { useCreateConfiguration } from "../config-hooks";

import { IConfiguration } from "../CreateConfiguration/types";

import {
  CONFIGURATION_SUCCESS_MESSAGE,
  GET_ALL_CONFIGURATIONS,
} from "../constants";

import useToggle from "../../../shared/CustomHooks/useToggle";
import ConfigurationComponent from "./component/ConfigurationComponent";

const ConfigurationsContainer = () => {
  const { isOpen, handleToggle } = useToggle();
  const queryClient = useQueryClient();

  const onSuccess = (value: AxiosResponse) => {
    handleToggle();
    toast.success(CONFIGURATION_SUCCESS_MESSAGE);
    queryClient.invalidateQueries([GET_ALL_CONFIGURATIONS]);
  };

  const onError = (values: AxiosError) => {
    toast.error(values.message);
  };

  const { mutate: createConfiguration } = useCreateConfiguration({
    onSuccess,
    onError,
  });

  const onSubmit = (values: IConfiguration) => {
    const formData = formDataMapping(values);
    createConfiguration(formData);
  };

  return (
    <ConfigurationComponent
      onSubmit={onSubmit}
      isOpen={isOpen}
      toggleModal={handleToggle}
    />
  );
};

export default ConfigurationsContainer;
