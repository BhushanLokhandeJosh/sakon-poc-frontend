import { AxiosResponse } from "axios";

import { GET, POST } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";
import { IObjectWithAnyFields } from "../../shared/types";

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
