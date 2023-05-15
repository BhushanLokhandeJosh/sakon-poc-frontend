import { useQuery } from "react-query";

import { GetAllConfig } from "./GetAllConfigurations/types";
import { getConfig, getDepartments } from "./config-services";

//This hook is used to fetch all the configurations.
const useFetchAllConfigurations = ({
  searchValue,
  filterData,
}: {
  searchValue?: string;
  filterData?: any;
}) => {
  return useQuery<GetAllConfig[]>(
    ["getAllConfigurations", searchValue, filterData],
    () =>
      getConfig({
        carrierName_like: searchValue,
        department_like: filterData.department,
        schedulingStatus_like: filterData.schedulingStatus === "scheduled",
      })
  );
};

//This hook is used to fetch all the departments.
export const useGetDepartments = () => {
  return useQuery(["departments"], () => getDepartments());
};

export default useFetchAllConfigurations;
