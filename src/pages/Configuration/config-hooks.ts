import { useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { createConfiguration } from "./config-services";

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
