import { useMutation, useQuery } from "react-query";

import { AxiosError, AxiosResponse } from "axios";
import { createSignup, getServiceProviders } from "./loginsignup-services";
import { GET_ALL_SERVICE_PROVIDERS } from "./LoginSignup/constants";

interface IResponseProps {
  onSuccess: (values: AxiosResponse) => void;
  onError: (values: AxiosError) => void;
}

// export const useUserLogin = (props: IResponseProps) => {
//   const { onSuccess, onError } = props;
//   return useMutation(userLogin, {
//     onSuccess,
//     onError,
//   });
// };

export const useCreateSignup = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(createSignup, {
    onSuccess,
    onError,
  });
};

// export const useLoginUser = (props: IResponseProps) => {
//   const { onSuccess, onError } = props;
//   return useMutation(loginCustomer, {
//     onSuccess,
//     onError,
//   });
// };

export const useFetchServiceProviders = () => {
  return useQuery(GET_ALL_SERVICE_PROVIDERS, () => getServiceProviders());
};
