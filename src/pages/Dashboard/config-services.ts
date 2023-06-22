import { GET } from "../../services/api/axios";
import { API_ROUTES } from "../../shared/constants";
export const getPieChartData = () => {
  return GET(API_ROUTES.DASHBOARD.GET);
};
export const getAllOrganizations = () => {
  return GET(API_ROUTES.ORGANIZATIONS.GET);
};
