import { AxiosResponse } from "axios";

import { POST } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";

export const createDepartment = (
  payload: FormData
): Promise<AxiosResponse<string, any>> => {
  return POST(`${API_ROUTES.DEPARTMENT.CREATE}`, payload);
};
