import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";

import { useFetchAllSchedulers } from "../../scheduler-hooks";

import CreateScheduler from "./CreateScheduler";
import { useQueryClient } from "react-query";
import { GET_ALL_SCHEDULERS } from "../../constant";

const CreateSchedulerComponent = ({
  useCustomHook,
  initialSchedulerValue,
  isOpen,
  handleToggle,
  successMessage,
  errorMessage,
}: any) => {
  // todo => dependancy for configuration(endpoint) api in configuration page for showing configuration(in dropdown menu) in scheduler form.
  const queryClient = useQueryClient();
  const [configOptions, setConfigOptions] =
    useState<{ value: string; label: string }[]>();

  const { data, isLoading, isError } = useFetchAllSchedulers({
    is_scheduled: true,
  });

  useEffect(() => {
    setConfigOptions(
      data?.map((obj: any) => ({
        value: JSON.stringify(obj.id),
        label: obj.configuration,
      }))
    );
  }, [data]);

  const onSuccess = async (values: AxiosResponse) => {
    // Invalidate queries here to refetch the data
    queryClient.invalidateQueries([GET_ALL_SCHEDULERS]);

    toast.success(successMessage);
    handleToggle();
  };

  const onError = (values: AxiosError) => {
    toast.error(errorMessage);
  };

  const { mutate: createScheduler } = useCustomHook({
    onSuccess,
    onError,
  });

  const onSubmit = (values: any) => {
    values.emp = "1"; //todo hardcoded for now since no employee id
    createScheduler(values); // or update scheduler also.
  };

  return (
    <CreateScheduler
      configurationOptions={configOptions}
      onSubmit={onSubmit}
      isOpen={isOpen}
      toggleModal={handleToggle}
      initialSchedulerValue={initialSchedulerValue}
    />
  );
};

export default CreateSchedulerComponent;
