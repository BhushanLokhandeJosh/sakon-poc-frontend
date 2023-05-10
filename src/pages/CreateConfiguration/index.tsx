import { toast } from "react-toastify";

import useToggle from "../../shared/CustomHooks/useToggle";
import { useCreateConfiguration } from "../../hooks/useQueryhooks";

import CreateConfigurationComponent from "./component";

import { InitialValuesProps } from "./types";

const CreateConfigContainer = () => {
  const { isOpen, handleToggle } = useToggle();

  const onSuccess = async (values: InitialValuesProps) => {
    toast.success("Configuration Added Successfully...");
    handleToggle();
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
        toggleModal={handleToggle}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default CreateConfigContainer;
