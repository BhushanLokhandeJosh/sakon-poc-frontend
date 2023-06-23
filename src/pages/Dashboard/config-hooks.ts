import { useQuery } from "react-query";
import { getAllOrganizations, getPieChartData } from "./config-services";

export const useFetchPieChartData = (values: any) => {
  const response = useQuery(["getPieChartDetails"], () =>
    getPieChartData(values)
  );
  return {
    // to check data.
    data: response?.data?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};

export const useGetOrganizations = () => {
  const response = useQuery(["getAllOrganizations"], () =>
    getAllOrganizations()
  );

  return {
    data: response?.data?.results,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};
