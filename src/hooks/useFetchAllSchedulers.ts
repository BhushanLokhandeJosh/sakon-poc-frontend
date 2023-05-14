import { useQuery } from "react-query";
import { GET } from "../services/api/axios";

const getSchedulers = (params: any) => {
  return GET("/schedulers", params);
};

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
