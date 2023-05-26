import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";

import useToggle from "../../../shared/CustomHooks/useToggle";
import { useScheduleConfiguration } from "../scheduler-hooks";

import CreateScheduler from "./component";
import { useEffect, useState } from "react";

const CreateSchedulerContainer = () => {
  const { isOpen, handleToggle } = useToggle();
  const [configOptions, setConfigOptions] = useState<any>();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/configurations?is_scheduled=False`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setConfigOptions(
          data.data?.map((obj: any) => ({
            value: JSON.stringify(obj?.id),
            label: obj?.ConfigurationName,
          }))
        );
      })
      .catch((err) => console.error(err));
  }, []);

  const onSuccess = async (values: AxiosResponse) => {
    toast.success("Configuration Added Successfully...");
    handleToggle();
  };

  const onError = (values: AxiosError) => {
    toast.error("Something Went Wrong...");
  };

  console.log(configOptions, "Config");

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
    <CreateScheduler
      configurationOptions={configOptions}
      onSubmit={onSubmit}
      isOpen={isOpen}
      toggleModal={handleToggle}
    />
  );
};

export default CreateSchedulerContainer;
