import { useQuery } from "react-query";
import {
  fetchDownloadJobs,
  fetchFileValidatorJobs,
  fetchTemplateValidatorJobs,
  fetchUploadJobs,
} from "./job-services";

export const useFetchAllDownloadJobs = ({
  searchValue,
  filterData,
}: {
  searchValue?: string;
  filterData?: any;
}) => {
  return useQuery<any, any>(
    ["getAllConfigurations", searchValue, filterData],
    () => fetchDownloadJobs()
  );
};

export const useFetchAllFileValidatorJobs = ({
  searchValue,
  filterData,
}: {
  searchValue?: string;
  filterData?: any;
}) => {
  return useQuery<any, any>(
    ["getAllConfigurations", searchValue, filterData],
    () => fetchFileValidatorJobs()
  );
};

export const useFetchAllTemplateValidatorJobs = ({
  searchValue,
  filterData,
}: {
  searchValue?: string;
  filterData?: any;
}) => {
  return useQuery<any, any>(
    ["getAllConfigurations", searchValue, filterData],
    () => fetchTemplateValidatorJobs()
  );
};

export const useFetchAllUploadJobs = ({
  searchValue,
  filterData,
}: {
  searchValue?: string;
  filterData?: any;
}) => {
  return useQuery<any, any>(
    ["getAllConfigurations", searchValue, filterData],
    () => fetchUploadJobs()
  );
};
