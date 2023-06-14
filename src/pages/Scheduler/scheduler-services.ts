import { GET, POST, PUT } from "../../services/api/axios";
import { AxiosResponse } from "axios";
import { ISchedulerProps } from "./ModalScheduler/types";
import { IObjectWithAnyFields } from "../../shared/types";
import { API_ROUTES } from "../../shared/constants";

export const getSchedulers = (params: IObjectWithAnyFields) => {
  return GET(API_ROUTES.SCHEDULERS.GET, params);
};

export const scheduleConfiguration = (
  payload: ISchedulerProps
): Promise<AxiosResponse<string, any>> => {
  return POST(API_ROUTES.SCHEDULERS.CREATE, payload);
};

export const updateScheduler = (
  payload: ISchedulerProps
): Promise<AxiosResponse<string, any>> => {
  return PUT(`${API_ROUTES.SCHEDULERS.PUT}/${payload.id}`, payload);
};
