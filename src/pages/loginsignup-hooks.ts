import { useMutation, useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { createSignup, getServiceProviders } from "./loginsignup-services";
import { GET_ALL_SERVICE_PROVIDERS } from "./LoginSignup/Signup/constant";

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

export const useFetchServiceProviders = () => {
  return useQuery(GET_ALL_SERVICE_PROVIDERS, () => getServiceProviders());
};
