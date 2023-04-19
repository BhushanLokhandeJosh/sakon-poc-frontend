import axios from "axios";
import { InitialValuesProps } from "../../pages/CreateConfiguration/constants";

const instance = axios.create({ baseURL: "http://localhost:8000" });

export const POST = (url: string, body: InitialValuesProps) => {
  return instance
    .post(url, body)
    .then((res) => res);
};
