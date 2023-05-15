import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";

import { useCreateConfiguration } from "../config-hooks";
import useToggle from "../../../shared/CustomHooks/useToggle";

import { IConfiguration } from "./types";
import { formDataMapping } from "./helpers";

import CreateConfiguration from "./component";

const CreateConfigurationsContainer = () => {
  const { isOpen, handleToggle } = useToggle();

  //TODO -> WE HAVE TO DISCUSS AND FIX THIS ERROR AND SUCCESS HANDLING ISSUE.
  const onSuccess = (value: AxiosResponse) => {
    toast.success("Configuration Added Successfully...");
    handleToggle();
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
    <CreateConfiguration
      isOpen={isOpen}
      toggleModal={handleToggle}
      onSubmit={onSubmit}
    />
  );
};

export default CreateConfigurationsContainer;
