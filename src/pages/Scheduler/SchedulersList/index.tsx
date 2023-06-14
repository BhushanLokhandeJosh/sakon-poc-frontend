import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";

import { useScheduleConfiguration } from "../scheduler-hooks";
import useToggle from "../../../shared/CustomHooks/useToggle";

import SchedulerComponent from "./component/SchedulerComponent";

const SchedulersContainer = () => {
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
    // TODO: Currently, there is only one employee defined. Therefore hardcoded as "1".
    values.emp = "1";
    createScheduler(values);
  };

  return <SchedulerComponent onSubmit={onSubmit} />;
};

export default SchedulersContainer;
