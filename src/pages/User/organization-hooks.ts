import { useMutation, useQuery } from "react-query";

import { AxiosError, AxiosResponse } from "axios";

import { createUser, getUserList, updateUser } from "./organization-services";
import { GET_ALL_USER } from "./constants";

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

export const useFetchUserList = () => {
  const response = useQuery(GET_ALL_USER, () => getUserList());
  return {
    data: response?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};


export const useUpdateUser = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(updateUser, {
    onSuccess,
    onError,
  });
};
