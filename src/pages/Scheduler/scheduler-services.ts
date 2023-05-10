import { AxiosResponse } from "axios";
import { POST } from "../../services/api/axios";
import { ISchedulerProps } from "./CreateScheduler/types";

export const scheduleConfiguration = (
  payload: ISchedulerProps
): Promise<AxiosResponse<string, any>> => {
  return POST("/schedules", payload);
};
