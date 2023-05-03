import { useMutation } from "react-query";
import { createConfiguration, scheduleConfiguration } from "../services/config-services";

interface IProps {
  onSuccess:(values:any) => void;
  onError:(values:any) => void
}

export const useCreateConfiguration = (props: IProps) => {
  const { onSuccess, onError } = props;
  return useMutation(createConfiguration, {
    onSuccess,
    onError
  });
};

export const useScheduleConfiguration = (props: IProps) => {
  const { onSuccess, onError } = props;
  return useMutation(scheduleConfiguration, {
    onSuccess,
    onError
  });
};