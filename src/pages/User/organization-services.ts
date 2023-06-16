import { AxiosResponse } from "axios";

import { POST } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";
import { IUser } from "./CreateUser/types";

export const createUser = (
  payload: IUser
): Promise<AxiosResponse<string, any>> => {
  return POST(`${API_ROUTES.USER.CREATE}`, payload);
};
