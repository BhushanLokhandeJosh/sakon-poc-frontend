import { useMutation, useQuery } from "react-query";

import { AxiosError, AxiosResponse } from "axios";

import {
  createDepartment,
  getDepartment,
  updateDepartment,
} from "./department-services";
import { GET_ALL_DEPARTMENT } from "./constants";

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

export const useFetchDepartment = ({
  searchValue,queryArguments
}: {
  searchValue?: string,queryArguments?:any
}) => {
  const response = useQuery(GET_ALL_DEPARTMENT, () =>
    getDepartment({ search: searchValue,id:queryArguments })
  );

  return {
    data: response?.data?.department,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};

export const useUpdateDepartment = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(updateDepartment, {
    onSuccess,
    onError,
  });
};
