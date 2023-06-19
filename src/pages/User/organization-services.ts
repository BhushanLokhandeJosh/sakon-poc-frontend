import { AxiosResponse } from "axios";

import { GET, POST, PUT } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";
import { IUserPayload } from "./UserListing/types";

export const createUser = (
  payload: IUserPayload
): Promise<AxiosResponse<string, any>> => {
  return POST(`${API_ROUTES.USER_LISTING}`, payload);
};

export const getUserList = () => {
  return GET(API_ROUTES.USER_LISTING);
};

export const updateUser = (
  payload: IUserPayload
): Promise<AxiosResponse<string, any>> => {
  return PUT(`${API_ROUTES.USER_LISTING}/${payload.id}`, payload);
};
