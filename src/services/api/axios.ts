import axios from "axios";

//TODO:Have to move common URL Into .env file and then use wherever needed.
const instance = axios.create({
  baseURL: "http://localhost:8000",
});

export const POST = (url: string, body: FormData | any) => {
  return instance.post(url, body).then((res) => res);
};

export const GET = (url: string, params?: any) => {
  return instance.get(url, { params }).then((res) => res.data);
};
//TODO :- Add other methods like POST,PUT,PATCH,DELETE Api Methods Later.
