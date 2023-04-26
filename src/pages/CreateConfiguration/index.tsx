import { toast } from "react-toastify";

import useModal from "../../shared/CustomHooks/useModal";
import { useCreateConfiguration } from "../../hooks/useQueryhooks";

import CreateConfigurationComponent from "./component";

import { InitialValuesProps } from "./types";


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

  const onSubmit = async (values: InitialValuesProps) => {
    await createConfiguration({ ...values });
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
