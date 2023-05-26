import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

export const POST = (
  url: string,
  body: FormData | any
): Promise<AxiosResponse<string, any>> => {
  return instance.post(url, body).then((res) => res);
};

//TODO -> Other API calls like GET,PUT,DELETE have yet to be implemented.
