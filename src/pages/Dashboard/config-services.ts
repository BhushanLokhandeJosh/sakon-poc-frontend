import { GET } from "../../services/api/axios";
import { API_ROUTES } from "../../shared/constants";

export const getAllOrganizations = () => {
  return GET(API_ROUTES.ORGANIZATIONS.GET);
};
export const getSuperAdminData = (params: any) => {
  return GET(API_ROUTES.SUPERADMIN.GET, params);
};

export const getDepartments = () => {
  return GET(API_ROUTES.DEPARTMENT.GET);
};

export const getAdminData = (params: any) => {
  console.log("ppp", params);

  return GET(API_ROUTES.ADMIN.GET, params);
};

export const getUserData = (params: any) => {
  return GET(API_ROUTES.USER.GET, params);
};
