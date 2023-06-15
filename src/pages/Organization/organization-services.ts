import { AxiosResponse } from "axios";

import { POST } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";

export const createOrganization = (
  payload: FormData
): Promise<AxiosResponse<string, any>> => {
  return POST(`${API_ROUTES.ORGANIZATION.CREATE}`, payload);
};
