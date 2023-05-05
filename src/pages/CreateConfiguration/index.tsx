import { toast } from "react-toastify";
import { AxiosError } from "axios";

import CreateConfigurationComponent from "./component";

import useModal from "../../shared/CustomHooks/useModal";
import { useCreateConfiguration } from "../../hooks/useQueryhooks";

import { IConfigurationValues } from "./types";
import { formDataMapping } from "./helpers";

const CreateConfigContainer = () => {
  const { isOpen, toggleModal } = useModal();

  const onSuccess = (values: IConfigurationValues) => {
    toast.success("Configuration Added Successfully...");
    toggleModal();
  };

  const onError = (values: AxiosError) => {
    toast.error(values.message);
  };

  const { mutate: createConfiguration } = useCreateConfiguration({
    onSuccess,
    onError,
  });

  const onSubmit = (values: IConfigurationValues) => {
    let formData = formDataMapping(values);
    createConfiguration(formData);
  };

  return (
    <div>
      <CreateConfigurationComponent
        isOpen={isOpen}
        toggleModal={toggleModal}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default CreateConfigContainer;
