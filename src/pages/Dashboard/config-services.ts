import { GET } from "../../services/api/axios";
import { API_ROUTES } from "../../shared/constants";
export const getPieChartData = (values: any) => {
  return GET(`API_ROUTES.DASHBOARD.GET/upload?${values}`);
};
export const getAllOrganizations = () => {
  return GET(API_ROUTES.ORGANIZATIONS.GET);
};
