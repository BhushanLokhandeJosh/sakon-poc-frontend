import React from "react";
import CreateSchedulerComponent from "./component";
import { initialProps } from "./constant";
import { toast } from "react-toastify";
import useModal from "../../shared/CustomHooks/useModal";

const CreateSchedulerContainer = () => {
  const { isOpen, toggleModal } = useModal();

  const onSubmit = (values: initialProps) => {
    if (values.interval === "DAILY") {
      const data = {
        emp_id: "1",
        config_id: "1",
        schedule_name: values.schedularName,
        frequency: values.interval,
        time: values.timeDuration,
        timezone: values.timeZone,
      };

      fetch("http://127.0.0.1:8000/schedules", {
        method: "POST",
        body: JSON.stringify(data),
      });
    }
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
