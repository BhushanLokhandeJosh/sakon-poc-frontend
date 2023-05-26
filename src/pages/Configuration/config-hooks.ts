import { useQuery } from "react-query";

import { DEPARTMENTS, GET_ALL_CONFIGURATIONS } from "./constants";
import { ConfigurationFilterFormInitialValues } from "./GetAllConfigurations/types";
import { getConfigurations, getDepartments } from "./config-services";

import { useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { createConfiguration } from "./config-services";

interface IResponseProps {
  onSuccess: (values: AxiosResponse) => void;
  onError: (values: AxiosError) => void;
}

//This hook is used to fetch all the configurations.
export const useFetchConfigurations = ({
  searchValue,
  filterData,
}: {
  searchValue?: string;
  filterData?: ConfigurationFilterFormInitialValues;
}) => {
  const response = useQuery<any>(
    [GET_ALL_CONFIGURATIONS, searchValue, filterData],
    () =>
      getConfigurations({
        carrier_name: searchValue, // carrierName_like: searchValue,
        department_like: filterData?.department,
        schedulingStatus_like: filterData?.schedulingStatus,
      })
  );
  console.log("dataa", response?.data?.data);

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
