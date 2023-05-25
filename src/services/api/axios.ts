import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8001",
});

export const GET = (
  url: string,
  params?: any
): Promise<AxiosResponse<string, any>> => {
  return instance.get(url).then((res) => res.data);
};
