import axios from "axios";
import { InitialValuesProps } from "../../pages/CreateConfiguration/types";

const instance = axios.create({ baseURL: "http://localhost:8000" });

export const POST = (url: string, body: InitialValuesProps) => {
  return instance.post(url, body).then((res) => res);
};

export const GET = (url: string, params: any) => {
  return instance.get(url, { params }).then((res) => res.data);
};
