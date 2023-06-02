import { AxiosError, AxiosResponse } from "axios";
import useToggle from "../../../shared/CustomHooks/useToggle";
import GetAllConfigurations from "./component";
import { toast } from "react-toastify";
import { useCreateConfiguration } from "../config-hooks";
import { IConfiguration } from "../CreateConfiguration/types";
import { formDataMapping } from "../CreateConfiguration/helpers";

const ConfigurationsContainer = () => {
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
    console.log(values);
    const formData = formDataMapping(values);
    // console.log(formData);
    createConfiguration(formData);
  };
  return (
    <GetAllConfigurations
      isOpen={isOpen}
      toggleModal={handleToggle}
      onSubmit={onSubmit}
    />
  );
};

export default ConfigurationsContainer;
