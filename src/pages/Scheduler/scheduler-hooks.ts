import { useMutation, useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { getSchedulers, scheduleConfiguration } from "./scheduler-services";

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


export const useFetchAllSchedulers = ({
  searchValue,
}: {
  searchValue?: string;
}) => {
  return useQuery(["getAllSchedulers", searchValue], () =>
    getSchedulers({
      schedule_name_like: searchValue,
    })
  );
};