import { GET, POST, PUT } from "../../services/api/axios";
import { AxiosResponse } from "axios";
import {
  ICreateSchedulerPayload,
  IUpdateSchedulerPayload,
} from "./SchedulerModal/types";
import { IObjectWithAnyFields } from "../../shared/types";
import { API_ROUTES } from "../../routes/routes-constants";

export const getSchedulers = (params: IObjectWithAnyFields) => {
  const {queryArguments} = params;
  console.log(queryArguments,"queryArguments")
  return GET(`${API_ROUTES.SCHEDULING_LIST}${API_ROUTES.GET}/${queryArguments}`, params);
};

export const scheduleConfiguration = (
  payload: ICreateSchedulerPayload
): Promise<AxiosResponse<string, any>> => {
  return POST(API_ROUTES.SCHEDULING_LIST, payload);
};

export const updateScheduler = (
  payload: IUpdateSchedulerPayload
): Promise<AxiosResponse<string, any>> => {
  return PUT(`${API_ROUTES.SCHEDULING_LIST}/${payload.id}`, payload);
};


export const getUnscheduledConfigurations = ({is_scheduled,queryArguments}:any) => {
  return GET(`${API_ROUTES.CONFIGURATION_LIST}${API_ROUTES.GET}/${queryArguments}`,{is_scheduled:is_scheduled});
}