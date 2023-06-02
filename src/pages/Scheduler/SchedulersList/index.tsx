import { useEffect, useState } from "react";
import SchedulerComponent from "./component";
import useToggle from "../../../shared/CustomHooks/useToggle";
import {
  useFetchAllSchedulers,
  useScheduleConfiguration,
} from "../scheduler-hooks";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const SchedulersContainer = () => {
  const { isOpen, handleToggle } = useToggle();
  const [configOptions, setConfigOptions] =
    useState<{ value: string; label: string }[]>();
  const { data, isLoading, isError } = useFetchAllSchedulers({
    is_scheduled: false,
  });

  useEffect(() => {
    setConfigOptions(
      data?.map((obj: any) => ({
        value: JSON.stringify(obj.id),
        label: obj.ConfigurationName,
      }))
    );
  }, [data]);

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
    values.emp = "1";
    console.log(values);
    createScheduler(values);
  };
  return (
    <SchedulerComponent
      configurationOptions={configOptions}
      onSubmit={onSubmit}
      isOpen={isOpen}
      toggleModal={handleToggle}
    />
  );
};

export default SchedulersContainer;
