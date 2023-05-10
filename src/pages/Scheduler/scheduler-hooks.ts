import { useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { scheduleConfiguration } from "./scheduler-services";

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
