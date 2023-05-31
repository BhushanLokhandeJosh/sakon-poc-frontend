import { API_ROUTES } from "../../routes/routes-constants";
import { GET } from "../../services/api/axios";

/**
 * This is used to fetch all jobs.
 */
export const fetchAllJobs = () => GET(API_ROUTES.JOBS.GET);

/**
 * This is used to fetch all downloads.
 */
export const fetchAllDownloads = (id: string) =>
  GET(`${API_ROUTES.DOWNLOADS.GET}`); //  GET(`${API_ROUTES.DOWNLOADS.GET}+/${id}`);

/**
 * This is used to fetch all File Validators.
 */
export const fetchFileValidators = () => GET(API_ROUTES.FILEVALIDATORS.GET);

/**
 * This is used to fetch all Template Validators.
 */
export const fetchTemplateValidators = () =>
  GET(API_ROUTES.TEMPLATEVALIDATORS.GET);

/**
 * This is used to fetch all Uploads.
 */
export const fetchUploads = () => GET(API_ROUTES.UPLOADS.GET);

// export const fetchAllJobs = (params: any) => GET(API_ROUTES.JOBS.GET, params);
