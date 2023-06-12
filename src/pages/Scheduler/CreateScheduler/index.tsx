import { useScheduleConfiguration } from "../scheduler-hooks";
import useToggle from "../../../shared/CustomHooks/useToggle";

import { initialSchedulerValue } from "./constants";
import { CONFIGURATION_SUCCESS_MESSAGE, FAILURE_MESSAGE } from "../constant";

import CreateSchedulerComponent from "./component";

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
