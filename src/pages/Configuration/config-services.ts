import { AxiosResponse } from "axios";

import { GET, POST, PUT } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";
import { IObjectWithAnyFields } from "../../shared/types";
import { IConfiguration } from "./CreateConfiguration/types";

export const getConfigurations = (params: IObjectWithAnyFields) => {
  return GET(API_ROUTES.CONFIGURATION.GET, params);
};

export const getDepartments = () => {
  return GET(API_ROUTES.DEPARTMENT.GET);
};

export const createConfiguration = (
  payload: FormData
): Promise<AxiosResponse<string, any>> => {
  return POST(`${API_ROUTES.CONFIGURATION.CREATE}`, payload);
};

export interface updateFormData extends FormData {
  id: number;
}

export const updateConfiguration = (
  payload: any // payload: FormData
): Promise<AxiosResponse<string, any>> => {
  console.log("payyyload", payload);
  return PUT(`${API_ROUTES.CONFIGURATION.PUT}/${payload.id}`, payload);
};

//createconfigurationpayload => formdata
