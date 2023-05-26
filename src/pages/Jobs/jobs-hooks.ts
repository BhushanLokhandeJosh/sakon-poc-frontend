import { useQuery } from "react-query";
import { fetchAllJobs } from "./job-services";

export const useFetchAllJobs = ({
  searchValue,
  filterData,
}: {
  searchValue?: string;
  filterData?: any;
}) => {
  const response = useQuery<any, any>(
    ["getAllJobs", searchValue, filterData],
    () =>
      fetchAllJobs({
        Service_like: searchValue,
      })
  );

  console.log(response.data?.data);
  return {
    data: response.data?.data,
    isLoading: response.isLoading,
    isErrot: response.isError,
  };
  // return response;
};
