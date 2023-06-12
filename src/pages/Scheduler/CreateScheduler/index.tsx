import React from "react";
import CreateSchedulerComponent from "./component";
import { initialSchedulerValue } from "./constants";
import { useScheduleConfiguration } from "../scheduler-hooks";
import useToggle from "../../../shared/CustomHooks/useToggle";
import { CONFIGURATION_SUCCESS_MESSAGE, FAILURE_MESSAGE } from "../constant";

const CreateSchedulerContainer = () => {
  const { isOpen, handleToggle } = useToggle();

  return (
    <CreateSchedulerComponent
      useCustomHook={useScheduleConfiguration}
      initialSchedulerValue={initialSchedulerValue}
      isOpen={isOpen}
      handleToggle={handleToggle}
      successMessage={CONFIGURATION_SUCCESS_MESSAGE}
      errorMessage={FAILURE_MESSAGE}
    />
  );
};

export default CreateSchedulerContainer;
