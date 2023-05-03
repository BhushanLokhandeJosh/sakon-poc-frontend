import React from "react";
import CreateSchedulerComponent from "./component";
import { initialProps } from "./types";
import { toast } from "react-toastify";
import useModal from "../../shared/CustomHooks/useModal";
import { useScheduleConfiguration } from "../../hooks/useQueryhooks";

const CreateSchedulerContainer = () => {
  const { isOpen, toggleModal } = useModal();


  const onSuccess = async (values:initialProps) => {
    toast.success("Configuration Added Successfully...");
    toggleModal();
  };

  const onError = (values: any) => {
    toast.error("Something Went Wrong...");
  };

    const { mutate: createScheduler } = useScheduleConfiguration({
    onSuccess,
    onError,
  });

  const onSubmit = (values: initialProps) => {
    console.log(values);
    createScheduler(values);
  };

  return (
    <div>
      <CreateSchedulerComponent 
      onSubmit={onSubmit} 
      isOpen={isOpen}
      toggleModal={toggleModal}
      />
    </div>
  );
};

export default CreateSchedulerContainer;
