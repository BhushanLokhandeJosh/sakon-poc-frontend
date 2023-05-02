import { toast } from "react-toastify";

import useModal from "../../shared/CustomHooks/useModal";
import { useCreateConfiguration } from "../../hooks/useQueryhooks";

import CreateConfigurationComponent from "./component";

import { InitialValuesProps } from "./types";
import { formDataMapping } from "./helpers";

const CreateConfigContainer = () => {
  const { isOpen, toggleModal } = useModal();

  const onSuccess = async (values: InitialValuesProps) => {
    toast.success("Configuration Added Successfully...");
    toggleModal();
  };

  const onError = (values: any) => {
    toast.error("Something Went Wrong...");
  };

  const { mutate: createConfiguration } = useCreateConfiguration({
    onSuccess,
    onError,
  });

  const onSubmit = (values: InitialValuesProps) => {
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
