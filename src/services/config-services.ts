import { AxiosResponse } from "axios";
import { POST } from "./api/axios";

export const createConfiguration = (
  payload: any
): Promise<AxiosResponse<any, any>> => {
  return POST("/configurations", payload);
};
