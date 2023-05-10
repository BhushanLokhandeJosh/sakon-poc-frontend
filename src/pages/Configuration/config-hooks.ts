import { useMutation } from "react-query";
import { createConfiguration } from "./config-services";
import { AxiosError, AxiosResponse } from "axios";

interface IResponseProps {
  onSuccess: (values: AxiosResponse) => void;
  onError: (values: AxiosError) => void;
}

export const useCreateConfiguration = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(createConfiguration, {
    onSuccess,
    onError,
  });
};
