import { GET } from "../../services/api/axios";
import { API_ROUTES } from "../../shared/constants";
export const getSuperAdminData = (queryParams: any) => {
  return GET(API_ROUTES.DASHBOARD.GET, queryParams);
};
export const getAllOrganizations = () => {
  return GET(API_ROUTES.ORGANIZATIONS.GET);
};

export const getDepartments = () => {
  return GET(API_ROUTES.DEPARTMENT.GET);
};
