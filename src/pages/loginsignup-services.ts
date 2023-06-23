import { AxiosResponse } from "axios";

import { POST } from "../services/api/axios";
import { API_ROUTES } from "../routes/routes-constants";

export const userLogin = (
  payload: FormData
): Promise<AxiosResponse<string, any>> => {
  console.log(payload);
  return POST(`${API_ROUTES.LOGIN}`, payload);
};
