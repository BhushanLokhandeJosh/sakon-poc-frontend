import { useMutation } from "react-query";

import { AxiosError, AxiosResponse } from "axios";

import { createDepartment } from "./organization-services";

interface IResponseProps {
  onSuccess: (values: AxiosResponse) => void;
  onError: (values: AxiosError) => void;
}

export const useCreateDepartment = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(createDepartment, {
    onSuccess,
    onError,
  });
};
