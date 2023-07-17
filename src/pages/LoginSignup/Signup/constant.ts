import { ISignupPayload } from "./types";

export const GET_ALL_SERVICE_PROVIDERS = "getAllServiceProviders";

export const initialSignUpUserValues: ISignupPayload = {
  email: "",
  organization: "",
  designation: "",
  department_count: 0,
  service_providers: [],
};
