import { AxiosResponse } from "axios";

import { POST } from "../../services/api/axios";

import { ISchedulerProps } from "./CreateScheduler/types";
import { API_ROUTES } from "../../routes/routes-constants";

export const scheduleConfiguration = (
  payload: ISchedulerProps
): Promise<AxiosResponse<string, any>> => {
  return POST(API_ROUTES.SCHEDULERS.CREATE, payload);
};

