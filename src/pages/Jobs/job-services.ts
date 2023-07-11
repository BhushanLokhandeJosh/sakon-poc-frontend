import { QueriesObserver } from "react-query";
import { API_ROUTES } from "../../routes/routes-constants";
import { GET } from "../../services/api/axios";

/**
 * This is used to fetch all jobs.
 */
export const fetchAllJobs = (params:any) => {
  const {queryArguments} = params;
  return GET(`${API_ROUTES.JOBS}${API_ROUTES.GET}/${queryArguments}`);
} 

/**
 * This is used to fetch all downloads.
 */
export const fetchAllDownloads = (jobId: number) =>
  GET(`${API_ROUTES.DOWNLOADS}/${jobId}`); //  GET(`${API_ROUTES.DOWNLOADS.GET}/${id}`);
/**
 * This is used to fetch all File Validators.
 */
export const fetchFileValidators = (jobId: number) =>
  GET(`${API_ROUTES.FILEVALIDATORS}/${jobId}`);

/**
 * This is used to fetch all Template Validators.
 */
export const fetchTemplateValidators = (jobId: number) =>
  GET(`${API_ROUTES.TEMPLATEVALIDATORS}/${jobId}`);

/**
 * This is used to fetch all Uploads.
 */
export const fetchUploads = (jobId: number) =>
  GET(`${API_ROUTES.UPLOADS}/${jobId}`);

// export const fetchAllJobs = (params: any) => GET(API_ROUTES.JOBS.GET, params);
