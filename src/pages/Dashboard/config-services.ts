import { API_ROUTES } from "../../routes/routes-constants";
import { GET } from "../../services/api/axios";

export const getAllOrganizations = () => {
  return GET(API_ROUTES.ORGANIZATION_LIST);
};
export const getSuperAdminData = (params: any) => {
  return GET(API_ROUTES.DASHBOARD, params);
};

export const getDepartments = (id:number) => {
  return GET(`${API_ROUTES.DEPARTMENT_LIST}/${id}`);
};

export const getAdminData = (params: any) => {
  return GET(API_ROUTES.DASHBOARD, params);
};

export const getUserData = (params: any) => {
  return GET(API_ROUTES.DASHBOARD, params);
};
