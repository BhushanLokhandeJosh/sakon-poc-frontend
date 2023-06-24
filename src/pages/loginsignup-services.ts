import { AxiosResponse } from "axios";

import { GET, POST } from "../services/api/axios";
import { API_ROUTES } from "../routes/routes-constants";

export const userLogin = (
  payload: FormData
): Promise<AxiosResponse<string, any>> => {
  console.log(payload);
  return POST(`${API_ROUTES.LOGIN}`, payload);
};

export const getServiceProviders = () => {
  return GET(API_ROUTES.SERVICE_PROVIDERS);
};

export const createSignup = (
  payload: any
): Promise<AxiosResponse<string, any>> => {
  console.log(payload);
  return POST(`${API_ROUTES.SIGNUP}`, payload);
};

export const loginUserApi = async (user: any) => {
  console.log("Service user", user);
  const response = await POST(`${API_ROUTES.LOGIN}`, user);
  return response;
};
