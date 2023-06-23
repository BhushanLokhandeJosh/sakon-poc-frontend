import { useMutation, useQuery } from "react-query";

import { AxiosError, AxiosResponse } from "axios";

import {
  createUser,
  getDepartmentList,
  getOrganizations,
  getUserList,
  updateUser,
} from "./user-services";
import { GET_ALL_ORG, GET_ALL_USER, GET_ORG_DEPT } from "./constants";

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

export const useFetchUserList = ({ searchValue }: { searchValue?: string }) => {
  const response = useQuery(GET_ALL_USER, () =>
    getUserList({ search: searchValue })
  );
  console.log("response", response);
  return {
    data: response?.data?.employee_info,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};

export const useFetchOrganization = () => {
  const response = useQuery(GET_ALL_ORG, () => getOrganizations());
  return {
    data: response?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};

export const useFetchDepartmentList = ({ org_id }: { org_id: number }) => {
  const response = useQuery(GET_ORG_DEPT, () =>
    getDepartmentList({ org_id: org_id })
  );
  return {
    data: response?.data?.results,
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
