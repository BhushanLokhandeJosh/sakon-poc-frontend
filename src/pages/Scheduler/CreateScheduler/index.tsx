import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";

import CreateSchedulerComponent from "./component";
import useToggle from "../../../shared/CustomHooks/useToggle";
import { useScheduleConfiguration } from "../scheduler-hooks";

import { ISchedulerProps } from "./types";

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

  const onSubmit = (values: ISchedulerProps) => {
    console.log(values);
    createScheduler(values);
  };

  return (
    <div>
      <CreateSchedulerComponent
        onSubmit={onSubmit}
        isOpen={isOpen}
        toggleModal={handleToggle}
      />
    </div>
  );
};

export default CreateSchedulerContainer;
