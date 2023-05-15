import { GET } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";

export const getConfig = (params: any) => {
  return GET(`${API_ROUTES.CONFIGURATION.GET}`, params);
};

export const getDepartments = () => {
  return GET(`${API_ROUTES.DEPARTMENT.GET}`);
};
