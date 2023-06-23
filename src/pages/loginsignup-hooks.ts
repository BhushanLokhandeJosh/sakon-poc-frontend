import { useMutation } from "react-query";

import { AxiosError, AxiosResponse } from "axios";
import { userLogin } from "./loginsignup-services";

interface IResponseProps {
  onSuccess: (values: AxiosResponse) => void;
  onError: (values: AxiosError) => void;
}

export const useUserLogin = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(userLogin, {
    onSuccess,
    onError,
  });
};
