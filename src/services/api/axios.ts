import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const GET = (url: string, params?: any) => {
  return instance.get(url, { params }).then((res) => res.data);
};

export const POST = (
  url: string,
  body: FormData | any
): Promise<AxiosResponse<string, any>> => {
  return instance.post(url, body).then((res) => res);
};

export const PUT = (url: string, body: any) => {
  console.log(body, "body");
  return instance.put(url, body).then((res) => res.data);
};

//TODO -> Other API calls like GET,PUT,DELETE have yet to be implemented.
