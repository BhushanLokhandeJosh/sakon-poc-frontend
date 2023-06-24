import { AxiosResponse } from "axios";

import { GET, POST, PUT } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";

import { IServiceProvidersPayload } from "./ServiceProviderList/types";

export const createServiceProviders = (
  payload: IServiceProvidersPayload
): Promise<AxiosResponse<string, any>> => {
  console.log(payload);
  return POST(`${API_ROUTES.SERVICE_PROVIDERS}`, payload);
};

export const getServiceProviders = () => {
  return GET(API_ROUTES.SERVICE_PROVIDERS);
};

export const updateServiceProviders = (
  payload: IServiceProvidersPayload
): Promise<AxiosResponse<string, any>> => {
  return PUT(`${API_ROUTES.SERVICE_PROVIDERS}/${payload.id}`, payload);
};
