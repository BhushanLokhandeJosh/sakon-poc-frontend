import { AxiosResponse } from "axios";

import { GET, POST, PUT } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";

import { IOrganizationPayload } from "./OrganizationList/types";

export const createOrganization = (
  payload: FormData
): Promise<AxiosResponse<string, any>> => {
  console.log(payload);
  return POST(`${API_ROUTES.ORGANIZATION_LIST}`, payload);
};

export const getOrganization = () => {
  return GET(API_ROUTES.ORGANIZATION_LIST);
};

export const updateOrganization = (
  payload: IOrganizationPayload
): Promise<AxiosResponse<string, any>> => {
  console.log(payload.id,"id");
  return PUT(`${API_ROUTES.ORGANIZATION_LIST}/${payload.id}`, payload);
};

export const getServiceProviders = () => {
  return GET(API_ROUTES.SERVICE_PROVIDERS);
};
