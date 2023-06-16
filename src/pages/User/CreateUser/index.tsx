import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";

import { useCreateUser } from "../organization-hooks";
import useToggle from "../../../shared/CustomHooks/useToggle";

import CreateUser from "./component";
import { IUser } from "./types";

const CreateUsersContainer = () => {
  const { isOpen, handleToggle } = useToggle();

  const onSuccess = (value: AxiosResponse) => {
    toast.success("Organization Added Successfully...");
    handleToggle();
  };

  const onError = (values: AxiosError) => {
    toast.error(values.message);
  };

  const { mutate: createUser } = useCreateUser({
    onSuccess,
    onError,
  });

  const onSubmit = (values: IUser) => {
    console.log(values);
    createUser(values);
  };

  return (
    <CreateUser
      isOpen={isOpen}
      toggleModal={handleToggle}
      onSubmit={onSubmit}
    />
  );
};

export default CreateUsersContainer;
