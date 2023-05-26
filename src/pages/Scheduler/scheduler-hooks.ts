import { useQuery } from "react-query";

import { getSchedulers } from "./scheduler-services";

//This hook is used to fetch all scheduling list.
export const useFetchAllSchedulers = ({
  searchValue,
}: {
  searchValue?: string;
}) => {
  const response = useQuery(["getAllSchedulers", searchValue], () =>
    getSchedulers({
      schedule_name: searchValue, // schedule_name_like: searchValue,
    })
  );

  return {
    data: response?.data?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};
