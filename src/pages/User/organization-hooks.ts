import { useMutation } from "react-query";

import { AxiosError, AxiosResponse } from "axios";

import { createUser } from "./organization-services";

interface IResponseProps {
  onSuccess: (values: AxiosResponse) => void;
  onError: (values: AxiosError) => void;
}

export const useCreateUser = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(createUser, {
    onSuccess,
    onError,
  });
};
