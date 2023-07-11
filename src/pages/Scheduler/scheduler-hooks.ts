import { useQuery, useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import {
  getSchedulers,
  getUnscheduledConfigurations,
  scheduleConfiguration,
  updateScheduler,
} from "./scheduler-services";
import { GET_ALL_SCHEDULERS } from "./constant";

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
  queryArguments
}: {
  searchValue?: string;
  is_scheduled?: boolean;
  queryArguments?:any
}) => {
  const response = useQuery([GET_ALL_SCHEDULERS, searchValue], () =>
    getSchedulers({
      queryArguments,
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

//post
export const useUpdateScheduler = (props: IScheduleResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(updateScheduler, {
    onSuccess,
    onError,
  });
};


export const useFetchUnscheduledConfigurations = ({
  is_scheduled,
  queryArguments
}: {
  is_scheduled:boolean,
  queryArguments:any
}) => {
  
  const response = useQuery<any>(
    ["unscheduled", is_scheduled],
    () =>
      getUnscheduledConfigurations({
        is_scheduled,
        queryArguments
      })
  );

  return {
    data: response?.data?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};