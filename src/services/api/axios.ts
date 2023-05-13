import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:8000" });

export const GET = (url: string, params?: any) => {
  return instance.get(url, { params }).then((res) => res.data);
};
