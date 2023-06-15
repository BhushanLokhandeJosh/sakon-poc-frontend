import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";

import { useCreateOrganization } from "../organization-hooks";
import useToggle from "../../../shared/CustomHooks/useToggle";

import CreateOrganization from "./component";

const CreateOrganizationsContainer = () => {
  const { isOpen, handleToggle } = useToggle();

  const onSuccess = (value: AxiosResponse) => {
    toast.success("Organization Added Successfully...");
    handleToggle();
  };

  const onError = (values: AxiosError) => {
    toast.error(values.message);
  };

  const { mutate: createOrganization } = useCreateOrganization({
    onSuccess,
    onError,
  });

  const onSubmit = (values: any) => {
    console.log(values);
    createOrganization(values);
  };

  return (
    <CreateOrganization
      isOpen={isOpen}
      toggleModal={handleToggle}
      onSubmit={onSubmit}
    />
  );
};

export default CreateOrganizationsContainer;
