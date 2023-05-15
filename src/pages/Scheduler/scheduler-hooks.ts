import { useQuery } from "react-query";

import { getSchedulers } from "./scheduler-services";

//This hook is used to fetch all scheduling list.
export const useFetchAllSchedulers = ({
  searchValue,
}: {
  searchValue?: string;
}) => {
  return useQuery(["getAllSchedulers", searchValue], () =>
    getSchedulers({
      schedule_name_like: searchValue,
    })
  );
};
