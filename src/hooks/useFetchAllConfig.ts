import React from "react";
import { useQuery } from "react-query";
import { GET } from "../services/api/axios";
import { toast } from "react-toastify";
import { GetAllConfig } from "../utils/type";

const getConfig = (params: any) => {
  return GET("/configDetails", params);
};

const useFetchAllConfigurations = ({
  searchValue,
}: {
  searchValue: string;
}) => {
  return useQuery<GetAllConfig[]>(["getAllConfigurations", searchValue], () =>
    getConfig({ carrierName_like: searchValue })
  );
};

export default useFetchAllConfigurations;
