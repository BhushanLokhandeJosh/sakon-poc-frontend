import { AxiosResponse } from "axios";

import { GET, POST, PUT } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";
import { IObjectWithAnyFields } from "../../shared/types";
import { IConfiguration } from "./CreateConfiguration/types";

export const getConfigurations = (params: IObjectWithAnyFields) => {
  const {queryArguments,department,schedulingStatus} = params;  
  let is_scheduled = (schedulingStatus === "not scheduled") ? false :(schedulingStatus === "scheduled" ?true:undefined)
  return GET(`${API_ROUTES.CONFIGURATION_LIST}${API_ROUTES.GET}/${queryArguments}`,{department_id:department,is_scheduled});
};

export const getDepartments = () => {
  return GET(API_ROUTES.DEPARTMENT_LIST);
};

export const createConfiguration = (
  payload: FormData | any
): Promise<AxiosResponse<string, any>> => {
  return POST(`${API_ROUTES.CONFIGURATION_LIST}`, payload);
};

export interface updateFormData extends FormData {
  id: number;
}

export const updateConfiguration = (
  payload: any // payload: FormData
): Promise<AxiosResponse<string, any>> => {
  console.log("payyyload", payload);
  return PUT(`${API_ROUTES.CONFIGURATION_LIST}/${payload.id}`, payload);
};

export const getConfigurationsById = (params: IObjectWithAnyFields) => {
  const {queryArguments} = params;  
  return GET(`${API_ROUTES.CONFIGURATION_LIST}/${queryArguments}`);
};