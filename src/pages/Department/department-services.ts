import { AxiosResponse } from "axios";

import { GET, POST, PUT } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";
import { IDepartmentPayload } from "./DepartmentListing/types";

export const createDepartment = (
  payload: IDepartmentPayload
): Promise<AxiosResponse<string, any>> => {
  return POST(`${API_ROUTES.DEPARTMENT}`, payload);
};

export const getDepartment = (params: any) => {
  const { id, searchValue } = params;
  return GET(`${API_ROUTES.DEPARTMENT}/${id}`, searchValue);
};

export const updateDepartment = (
  payload: IDepartmentPayload
): Promise<AxiosResponse<string, any>> => {
  return PUT(`${API_ROUTES.DEPARTMENT}/${payload.id}`, payload);
};
