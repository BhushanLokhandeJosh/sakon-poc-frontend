import { useQuery, useMutation } from "react-query";

import { AxiosError, AxiosResponse } from "axios";

import {
  createOrganization,
  getOrganization,
  getServiceProviders,
  updateOrganization,
} from "./organization-services";
import { GET_ALL_ORGANIZATION, GET_ALL_SERVICE_PROVIDERS } from "./constants";

interface IResponseProps {
  onSuccess: (values: AxiosResponse) => void;
  onError: (values: AxiosError) => void;
}

export const useCreateOrganization = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(createOrganization, {
    onSuccess,
    onError,
  });
};

export const useFetchOrganization = ({
  searchValue,
}: {
  searchValue?: string;
}) => {
  // const { onSuccess, onError } = props;

  const response = useQuery(GET_ALL_ORGANIZATION, () => getOrganization({search:searchValue}));
  console.log("Fetch Response", response);
  return {
    data: response?.data?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};
// getServiceProviders

export const useFetchServiceProviders = () => {
  // const { onSuccess, onError } = props;
  return useQuery(GET_ALL_SERVICE_PROVIDERS, () => getServiceProviders());
};

export const useUpdateOrganization = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(updateOrganization, {
    onSuccess,
    onError,
  });
};
