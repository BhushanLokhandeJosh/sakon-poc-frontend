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
import { useSelector } from "react-redux";
import { GET } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";
import { getDepartment } from "../Department/department-services";

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

export const useFetchUsers =  ({ searchValue,queryArguments }: { searchValue?: string,queryArguments?:any }) => {
  //@ts-ignore
  console.log("queryArguments",queryArguments)
  
  const response =  useQuery('bHUSHAN', () =>
  getUserList({ search: searchValue,id:queryArguments })
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
    data: response?.data?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};

export const useFetchDepartmentList = ({ emp_id }: { emp_id: any }) => {
  const response = useQuery(GET_ORG_DEPT, () =>
    getDepartmentList({ emp_id: emp_id })
  );
  return {
    data: response?.data?.department,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};

export const useUpdateUser = (props: IResponseProps) => {
  console.log("Update User Called");
  const { onSuccess, onError } = props;
  return useMutation(updateUser, {
    onSuccess,
    onError,
  });
};
