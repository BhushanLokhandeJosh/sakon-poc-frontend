import { useQuery } from "react-query";
import {
  fetchAllDownloads,
  fetchAllJobs,
  fetchFileValidators,
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
  return useQuery<any, any>(
    ["getAllConfigurations", searchValue, filterData],
    () => fetchAllJobs()
  );
};

//downloads
export const useFetchDownloads = (queryArguments: any) => {
  return useQuery<any, any>(["getAllDownloads"], () =>
    fetchAllDownloads(queryArguments.id)
  );
};

//fileValidators
export const useFetchFileValidators = () => {
  return useQuery<any, any>(["getFileValidators"], () => fetchFileValidators());
};

//templateValidators
export const useFetchTemplateValidators = () => {
  return useQuery<any, any>(["getTemplateValidators"], () =>
    fetchTemplateValidators()
  );
};

//uploads
export const useFetchUploads = () => {
  return useQuery<any, any>(["getUploads"], () => fetchUploads());
};
