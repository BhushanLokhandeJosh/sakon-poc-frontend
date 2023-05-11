import { AxiosResponse } from "axios";

import { POST } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";

export const createConfiguration = (
  payload: FormData
): Promise<AxiosResponse<string, any>> => {
  return POST(`${API_ROUTES.CONFIGURATION.CREATE}`, payload);
};
