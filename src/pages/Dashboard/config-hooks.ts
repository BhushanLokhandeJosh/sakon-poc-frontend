import { useQuery } from "react-query";
import {
  getAllOrganizations,
  getDepartments,
  getSuperAdminData,
} from "./config-services";

/**
 * This hook is used to fetch all the organizations data which is required to show on bar graph and pie chart.
 */
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

export const useFetchSuperAdminData = (queryParams: any) => {
  const response = useQuery(["getSuperAdmintData"], () =>
    getSuperAdminData(queryParams)
  );
  return {
    // to check data.
    data: response?.data?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};

//This hook is used to fetch all the departments.
export const useGetDepartments = () => {
  const response = useQuery(["departments"], () => getDepartments());
  return {
    data: response?.data?.results,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};
