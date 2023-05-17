import { useQuery } from "react-query";

import { DEPARTMENTS, GET_ALL_CONFIGURATIONS } from "./constants";
import {
  ConfigurationFilterFormInitialValues,
  ConfigurationsList,
} from "./GetAllConfigurations/types";
import { getConfigurations, getDepartments } from "./config-services";

//This hook is used to fetch all the configurations.
const useFetchConfigurations = ({
  searchValue,
  filterData,
}: {
  searchValue?: string;
  filterData?: ConfigurationFilterFormInitialValues;
}) => {
  return useQuery<ConfigurationsList[]>(
    [GET_ALL_CONFIGURATIONS, searchValue, filterData],
    () =>
      getConfigurations({
        carrierName_like: searchValue,
        department_like: filterData?.department,
        schedulingStatus_like: filterData?.schedulingStatus === "scheduled",
      })
  );
};

//This hook is used to fetch all the departments.
export const useGetDepartments = () => {
  return useQuery([DEPARTMENTS], () => getDepartments());
};

export default useFetchConfigurations;
