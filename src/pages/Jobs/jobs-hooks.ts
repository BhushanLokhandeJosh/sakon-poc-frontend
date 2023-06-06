import { useQuery } from "react-query";

import {
  fetchAllDownloads,
  fetchAllJobs,
  fetchFileValidators,
  fetchSingleScheduler,
  fetchTemplateValidators,
  fetchUploads,
} from "./job-services";

export const useFetchAllJobs = ({
  searchValue,
  filterData,
}: {
  searchValue?: string;
  filterData?: any;
}) => {
  const response = useQuery<any, any>(
    ["getAllConfigurations", searchValue, filterData],
    () => fetchAllJobs()
  );
  return {
    data: response.data?.data,
    isLoading: response.isLoading,
    isError: response.isError,
    refetch: response.refetch,
  };
};

//downloads
export const useFetchDownloads = (queryArguments: any) => {
  const response = useQuery<any, any>(["getAllDownloads"], () =>
    fetchAllDownloads(queryArguments?.queryArguments?.jobId)
  );
  return {
    data: response.data?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};

//fileValidators
export const useFetchFileValidators = (queryArguments: any) => {
  const response = useQuery<any, any>(["getFileValidators"], () =>
    fetchFileValidators(queryArguments?.queryArguments?.jobId)
  );
  return {
    data: response.data?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};

//templateValidators
export const useFetchTemplateValidators = (queryArguments: any) => {
  const response = useQuery<any, any>(["getTemplateValidators"], () =>
    fetchTemplateValidators(queryArguments?.queryArguments?.jobId)
  );
  return {
    data: response.data?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};

//uploads
export const useFetchUploads = (queryArguments: any) => {
  const response = useQuery<any, any>(["getUploads"], () =>
    fetchUploads(queryArguments?.queryArguments?.jobId)
  );
  return {
    data: response.data?.data,
    isLoading: response.isLoading,
    isError: response.isError,
  };
};
