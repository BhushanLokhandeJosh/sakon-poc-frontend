import { API_ROUTES } from "../../routes/routes-constants";
import { GET } from "../../services/api/axios";

export const getSchedulers = (params: any) => {
  return GET(`${API_ROUTES.SCHEDULER.GET}`, params);
};
