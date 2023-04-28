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
}: {
  searchValue?: string;
}) => {
  return useQuery<GetAllConfig[]>(["getAllConfigurations", searchValue], () =>
    getConfig({ carrierName_like: searchValue })
  );
};

export const useGetDepartments = () => {
  return useQuery(["departments"], () => getDepartments());
};

export default useFetchAllConfigurations;
