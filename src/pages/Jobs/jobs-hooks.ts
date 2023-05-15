import { useQuery } from "react-query";
import {
  fetchAllJobs,
} from "./job-services";

export const useFetchAllJobs = ({
  searchValue,
  filterData,
}: {
  searchValue?: string;
  filterData?: any;
}) => {
  return useQuery<any, any>(
    ["getAllConfigurations", searchValue, filterData],
    () => fetchAllJobs()
  );
};

