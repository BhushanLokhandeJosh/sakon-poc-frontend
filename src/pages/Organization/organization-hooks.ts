import { useQuery, useMutation } from "react-query";

import { AxiosError, AxiosResponse } from "axios";

import {
  createServiceProviders,
  getServiceProviders,
  updateServiceProviders,
} from "./organization-services";
import { GET_ALL_SERVICE_PROVIDERS } from "./constants";

interface IResponseProps {
  onSuccess: (values: AxiosResponse) => void;
  onError: (values: AxiosError) => void;
}

export const useCreateServiceProviders = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(createServiceProviders, {
    onSuccess,
    onError,
  });
};

export const useFetchServiceProviders = (
  {
  searchValue,
  } : {
  searchValue?: string;
  }
) => {
  const response = useQuery(GET_ALL_SERVICE_PROVIDERS, () =>
    getServiceProviders({search:searchValue})
  );

  return {
    data: response?.data?.results,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};

export const useUpdateServiceProviders = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(updateServiceProviders, {
    onSuccess,
    onError,
  });
};
