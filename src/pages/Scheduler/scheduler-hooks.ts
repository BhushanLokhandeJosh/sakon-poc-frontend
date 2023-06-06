import { useQuery, useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { getSchedulers, scheduleConfiguration } from "./scheduler-services";
import { fetchSingleScheduler } from "../Jobs/job-services";

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

//This hook is used to fetch all scheduling list.
export const useFetchAllSchedulers = ({
  searchValue,
  is_scheduled,
}: {
  searchValue?: string;
  is_scheduled?: boolean;
}) => {
  const response = useQuery(["getAllSchedulers", searchValue], () =>
    getSchedulers({
      schedule_name: searchValue,
      is_scheduled,
    })
  );

  return {
    data: response?.data?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};

export const useFetchSingleScheduler = (queryArguments: any) => {
  console.log("in a single scheduler", queryArguments);

  return useQuery<any, any>(["getSingleScheduler"], () =>
    fetchSingleScheduler(queryArguments)
  );
};
