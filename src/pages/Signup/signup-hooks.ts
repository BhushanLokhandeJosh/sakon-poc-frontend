import { useQuery, useMutation } from "react-query";

import { AxiosError, AxiosResponse } from "axios";

import {
  createSignup,
  getServiceProviders,
  getSignUpUserList,
  updateSignUp,
} from "./signup-services";
import { GET_ALL_SIGNUP, GET_ALL_SERVICE_PROVIDERS } from "./constants";

interface IResponseProps {
  onSuccess: (values: AxiosResponse) => void;
  onError: (values: AxiosError) => void;
}

export const useCreateSignup = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(createSignup, {
    onSuccess,
    onError,
  });
};

export const useFetchSignupUserList = () => {
  // const { onSuccess, onError } = props;

  const response = useQuery(GET_ALL_SIGNUP, () => getSignUpUserList());
  return {
    data: response?.data?.results,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};
// getServiceProviders

export const useFetchServiceProviders = () => {
  // const { onSuccess, onError } = props;
  return useQuery(GET_ALL_SERVICE_PROVIDERS, () => getServiceProviders());
};

export const useUpdateUserSignUp = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(updateSignUp, {
    onSuccess,
    onError,
  });
};
