import { AxiosResponse } from "axios";

import { GET, POST } from "../services/api/axios";
import { API_ROUTES } from "../routes/routes-constants";
import { removeToken } from "../services/AuthServices";

export const userLogin = (
  payload: FormData
): Promise<AxiosResponse<string, any>> => {
  return POST(`${API_ROUTES.LOGIN}`, payload);
};

export const getServiceProviders = () => {
  return GET(API_ROUTES.SERVICE_PROVIDERS);
};

export const createSignup = (
  payload: any
): Promise<AxiosResponse<string, any>> => {
  return POST(`${API_ROUTES.SIGNUP}`, payload);
};

export const loginUserApi = async (user: any) => {
  const response = await POST(`${API_ROUTES.LOGIN}`, user);
  return response;
};

export const signoutUserApi = async () => {
  await removeToken();
  return {
    status: 200,
    message: "User Logout Successfully",
  };
};
