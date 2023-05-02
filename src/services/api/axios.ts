import axios from "axios";
import { InitialValuesProps } from "../../pages/CreateConfiguration/types";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const POST = (url: string, body: InitialValuesProps) => {
  return instance.post(url, body).then((res) => res);
};
