import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";

import CreateConfigurationComponent from "./component";

import { useCreateConfiguration } from "../config-hooks";
import useToggle from "../../../shared/CustomHooks/useModal";

import { IConfiguration } from "./types";
import { formDataMapping } from "./helpers";

const CreateConfigContainer = () => {
  const { isOpen, handleToggle } = useToggle();

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
    let formData = formDataMapping(values);
    createConfiguration(formData);
  };

  return (
    <div>
      <CreateConfigurationComponent
        isOpen={isOpen}
        toggleModal={handleToggle}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default CreateConfigContainer;
