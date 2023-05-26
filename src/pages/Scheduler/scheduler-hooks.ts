import { useMutation, useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { getSchedulers, scheduleConfiguration } from "./scheduler-services";

//This hook is used to fetch all scheduling list.
export const useFetchAllSchedulers = ({
  searchValue,
}: {
  searchValue?: string;
}) => {
  const response = useQuery(["getAllSchedulers", searchValue], () =>
    getSchedulers({
      schedule_name: searchValue, // schedule_name_like: searchValue,
    })
  );

  return {
    data: response?.data?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};

interface IScheduleResponseProps {
  onSuccess: (values: AxiosResponse) => void;
  onError: (values: AxiosError) => void;
}

export const useScheduleConfiguration = (props: IScheduleResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(scheduleConfiguration, {
    onSuccess,
    onError,
  });
};
