import { AxiosResponse } from "axios";

import { GET, POST } from "../../services/api/axios";

import { ISchedulerProps } from "./CreateScheduler/types";
import { API_ROUTES } from "../../routes/routes-constants";

export const scheduleConfiguration = (
  payload: ISchedulerProps
): Promise<AxiosResponse<string, any>> => {
  return POST(API_ROUTES.SCHEDULERS.CREATE, payload);
};

export const getSchedulers = (params: any) => {
  console.log("Hook Called", params);
  return GET(`${API_ROUTES.SCHEDULERS.GET}`, params);
};
