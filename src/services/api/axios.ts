import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:8000" });

export const POST = (url: string, body: FormData | any) => {
  return instance.post(url, body).then((res) => res);
};

export const GET = (url: string, params?: any) => {
  return instance.get(url, { params }).then((res) => res.data);
};
