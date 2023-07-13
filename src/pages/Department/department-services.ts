import { AxiosResponse } from "axios";

import { GET, POST, PUT } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";
import { IDepartmentPayload } from "./DepartmentListing/types";

export const createDepartment = (
  payload: IDepartmentPayload
): Promise<AxiosResponse<string, any>> => {
  return POST(`${API_ROUTES.DEPARTMENT_LIST}`, payload);
};


export const getDepartment = (params: any) => {
  return GET(API_ROUTES.DEPARTMENT_LIST, params);
};

export const updateDepartment = (
  payload: IDepartmentPayload
): Promise<AxiosResponse<string, any>> => {
  console.log("Updatedept", payload.id);
  return PUT(`${API_ROUTES.DEPARTMENT_LIST}/${payload.id}`, payload);
};
