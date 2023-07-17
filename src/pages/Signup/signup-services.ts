import { AxiosResponse } from "axios";

import { GET, POST, PUT } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";

import { ISignupPayload } from "./SignupList/types";

export const createSignup = (
  payload: any
): Promise<AxiosResponse<string, any>> => {
  return POST(`${API_ROUTES.SIGNUP}`, payload);
};

export const getSignUpUserList = () => {
  return GET(API_ROUTES.SIGNUP);
};

export const updateSignUp = (
  payload: ISignupPayload
): Promise<AxiosResponse<string, any>> => {
  return PUT(`${API_ROUTES.SIGNUP}/${payload.id}`, payload);
};

export const getServiceProviders = () => {
  return GET(API_ROUTES.SERVICE_PROVIDERS);
};
