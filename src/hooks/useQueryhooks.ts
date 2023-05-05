import { useMutation } from "react-query";
import { createConfiguration } from "../services/config-services";
import { AxiosError } from "axios";

interface IResponseProps {
  onSuccess: (values: any) => void;
  onError: (values: AxiosError) => void;
}

export const useCreateConfiguration = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(createConfiguration, {
    onSuccess,
    onError,
  });
};
