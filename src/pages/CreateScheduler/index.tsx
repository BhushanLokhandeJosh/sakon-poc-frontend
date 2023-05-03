import React from "react";
import CreateSchedulerComponent from "./component";
import { initialProps } from "./types";
import { toast } from "react-toastify";
import useModal from "../../shared/CustomHooks/useModal";

const CreateSchedulerContainer = () => {
  const { isOpen, toggleModal } = useModal();

  const onSubmit = (values: initialProps) => {
    console.log(values);
    toast.success("Scheduling Done Successfully.");
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
