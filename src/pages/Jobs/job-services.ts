import { GET } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";

export const fetchAllJobs = () => GET(API_ROUTES.JOBS.GET);

export const fetchAllDownloads = (id: string) =>
  GET(`${API_ROUTES.DOWNLOADS.GET}`); //  GET(`${API_ROUTES.DOWNLOADS.GET}+/${id}`);

export const fetchFileValidators = () => GET(API_ROUTES.FILEVALIDATORS.GET);

export const fetchTemplateValidators = () =>
  GET(API_ROUTES.TEMPLATEVALIDATORS.GET);

export const fetchUploads = () => GET(API_ROUTES.UPLOADS.GET);

// export const fetchAllJobs = (params: any) => GET(API_ROUTES.JOBS.GET, params);
