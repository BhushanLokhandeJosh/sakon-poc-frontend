import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";

import useToggle from "../../../shared/CustomHooks/useToggle";
import { useScheduleConfiguration } from "../scheduler-hooks";

import { ISchedulerProps } from "./types";

import CreateScheduler from "./component";

const CreateSchedulerContainer = () => {
  const { isOpen, handleToggle } = useToggle();

  const onSuccess = async (values: AxiosResponse) => {
    toast.success("Configuration Added Successfully...");
    handleToggle();
  };

  const onError = (values: AxiosError) => {
    toast.error("Something Went Wrong...");
  };

  const { mutate: createScheduler } = useScheduleConfiguration({
    onSuccess,
    onError,
  });


  const onSubmit = (values: any) => {
    console.log(values);
    // createScheduler(values);
  };

  return (
    <CreateScheduler
      onSubmit={onSubmit}
      isOpen={isOpen}
      toggleModal={handleToggle}
    />
  );
};

export default CreateSchedulerContainer;
