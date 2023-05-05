import axios, { AxiosResponse } from "axios";
import { IConfigurationValues } from "../../pages/CreateConfiguration/types";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

export const POST = (
  url: string,
  body: IConfigurationValues
): Promise<AxiosResponse<any, any>> => {
  return instance.post(url, body).then((res) => res);
};
