import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";

import { useCreateDepartment } from "../organization-hooks";
import useToggle from "../../../shared/CustomHooks/useToggle";

import CreateDepartment from "./component";

const CreateDepartmentContainer = () => {
  const { isOpen, handleToggle } = useToggle();

  const onSuccess = (value: AxiosResponse) => {
    toast.success("Organization Added Successfully...");
    handleToggle();
  };

  const onError = (values: AxiosError) => {
    toast.error(values.message);
  };

  const { mutate: createDepartment } = useCreateDepartment({
    onSuccess,
    onError,
  });

  const onSubmit = (values: any) => {
    console.log(values);
    createDepartment(values);
  };

  return (
    <CreateDepartment
      isOpen={isOpen}
      toggleModal={handleToggle}
      onSubmit={onSubmit}
    />
  );
};

export default CreateDepartmentContainer;
