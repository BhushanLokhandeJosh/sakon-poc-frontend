import { AxiosResponse } from "axios";

import { GET, POST, PUT } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";
import { IUserPayload } from "./UserListing/types";

export const createUser = (
  payload: IUserPayload
): Promise<AxiosResponse<string, any>> => {
  return POST(`${API_ROUTES.USER_LISTING}`, payload);
};

export const getUserList = (params: any) => {
  return GET(API_ROUTES.USER_LISTING, params);
};

export const getDepartmentList = (params: any) => {
  return GET(API_ROUTES.DEPARTMENTS, params);
};

export const getOrganizations = () => {
  return GET(API_ROUTES.ORGANIZATION);
};

export const updateUser = (
  payload: IUserPayload
): Promise<AxiosResponse<string, any>> => {
  return PUT(`${API_ROUTES.USER_LISTING}/${payload.id}`, payload);
};
