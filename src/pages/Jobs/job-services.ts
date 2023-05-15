import { GET } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";

export const fetchAllJobs = () => GET(API_ROUTES.JOBS.GET);