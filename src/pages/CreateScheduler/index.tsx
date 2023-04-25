import React from "react";
import CreateSchedulerComponent from "./component";
import { initialProps } from "./constant";
import { toast } from "react-toastify";

const CreateSchedulerContainer = () => {
  const onSubmit = (values:initialProps) => {
    console.log(values);
    toast.success("Scheduling Done Successfully.")
  };

  return (
    <div>
      <CreateSchedulerComponent onSubmit={onSubmit}/>
    </div>
  );
};

export default CreateSchedulerContainer;
