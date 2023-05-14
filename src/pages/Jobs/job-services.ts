import { GET } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";

export const fetchDownloadJobs = () => GET(API_ROUTES.JOBS.DOWNLOAD_JOBS.GET);

export const fetchFileValidatorJobs = () => GET(API_ROUTES.JOBS.FILE_VALIDATOR_JOBS.GET);

export const fetchTemplateValidatorJobs = () => GET(API_ROUTES.JOBS.TEMPLATE_VALIDATOR_JOBS.GET);

export const fetchUploadJobs = () => GET(API_ROUTES.JOBS.UPLOAD_JOBS.GET);