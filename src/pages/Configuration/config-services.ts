import { AxiosResponse } from "axios";
import { POST } from "../../services/api/axios";

export const createConfiguration = (
  payload: FormData
): Promise<AxiosResponse<string, any>> => {
  return POST("/configurations", payload);
};
