import React from "react";
import { useQuery } from "react-query";
import { GET } from "../services/api/axios";
import { toast } from "react-toastify";
import { GetAllConfig } from "../pages/GetAllConfigurations/types";

const getConfig = (params: any) => {
  return GET("/configDetails", params);
};

const getDepartments = () => {
  return GET("/departments");
};

const useFetchAllConfigurations = ({
  searchValue,
  filterData,
}: {
  searchValue?: string;
  filterData?: any;
}) => {
  console.log("filterData", filterData);
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

export const useGetDepartments = () => {
  return useQuery(["departments"], () => getDepartments());
};

export default useFetchAllConfigurations;
