import { useQuery } from "react-query";
import {
  getAdminData,
  getAllOrganizations,
  getDepartments,
  getSuperAdminData,
  getUserData,
} from "./config-services";

/**
 * This hook is used to fetch all the organizations data which is required to show on bar graph and pie chart.
 */
export const useGetOrganizations = () => {
  const response = useQuery(["getAllOrganizations"], () =>
    getAllOrganizations()
  );
  console.log("ORGANIZATIONS",response)

  return {
    data: response?.data?.results,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};

export const useFetchSuperAdminData = ({
  filterData,
}: {
  filterData?: any;
}) => {
  const response = useQuery(["getSuperAdmintData", filterData], () =>
    getSuperAdminData({
      organization: filterData?.organization,
      frequency: filterData?.frequency,
    })
  );
  console.log("SupGraph",response);
  return {
    data: response?.data,
    isLoading: response.isLoading,
    isError: response.isError,
    refetch: response?.refetch,
  };
};

//This hook is used to fetch all the departments.
export const useGetDepartments = (id:number) => {
  const response = useQuery(["departments"], () => getDepartments(id));
  console.log("response",response);
  
  return {
    data: response?.data?.department,
    isLoading: response.isLoading,
    isError: response.isError,
  };
  
  
};

export const useFetchAdminData = ({ filterData }: { filterData?: any }) => {
  const response = useQuery(["getAdminData", filterData], () =>
    getAdminData({
      department: filterData?.department,
      frequency: filterData?.frequency,
    })
  );
  return {
    data: response?.data,
    isLoading: response.isLoading,
    isError: response.isError,
    refetch: response?.refetch,
  };
};

export const useFetchUserData = ({ filterData }: { filterData: any }) => {
  const response = useQuery(["getUserData", filterData], () =>
    getUserData({
      frequency: filterData?.frequency,
    })
  );
  return {
    data: response?.data,
    isLoading: response.isLoading,
    isError: response.isError,
    refetch: response?.refetch,
  };
};
