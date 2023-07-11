import { useQuery, useMutation } from "react-query";

import { AxiosError, AxiosResponse } from "axios";

import { DEPARTMENTS, GET_ALL_CONFIGURATIONS } from "./constants";
import { ConfigurationFilterFormInitialValues } from "./GetAllConfigurations/types";
import {
  getConfigurations,
  getConfigurationsById,
  getDepartments,
  updateConfiguration,
} from "./config-services";

import { createConfiguration } from "./config-services";

interface IResponseProps {
  onSuccess: (values: AxiosResponse) => void;
  onError: (values: AxiosError) => void;
  id?: number;
}

//This hook is used to fetch all the configurations.
export const useFetchConfigurations = ({
  searchValue,
  filterData,
  queryArguments
}: {
  searchValue?: string;
  filterData?: ConfigurationFilterFormInitialValues;
  queryArguments?:any
}) => {
  console.log("filterDatafilterdata", filterData);
  
  const response = useQuery<any>(
    [GET_ALL_CONFIGURATIONS, searchValue, filterData],
    () =>
      getConfigurations({
        queryArguments,
        carrier_name: searchValue, // carrierName_like: searchValue,
        department: filterData?.department,
        schedulingStatus: filterData?.schedulingStatus,
      })
  );

  return {
    data: response?.data?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};

//This hook is used to fetch all the departments.
export const useGetDepartments = () => {
  return useQuery([DEPARTMENTS], () => getDepartments());
};

export const useCreateConfiguration = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(createConfiguration, {
    onSuccess,
    onError,
  });
};

export const useUpdateConfiguration = (props: any) => {
  const { onSuccess, onError } = props;
  return useMutation(updateConfiguration, {
    onSuccess,
    onError,
  });
};


export const useFetchConfigurationById = ({queryArguments}: {queryArguments?:any}) => {
  console.log("In Hooks",queryArguments);
  const response = useQuery<any>(
    ["Bhushan"],() =>getConfigurationsById({queryArguments})
  )
  return {
    data: response?.data?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
}