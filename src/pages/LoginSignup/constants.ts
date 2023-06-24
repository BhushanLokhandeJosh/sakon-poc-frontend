import { ISignupPayload } from "./Signup/types";

export const GET_ALL_SERVICE_PROVIDERS = "getAllServiceProviders";

export const initialLoginValues = {
  email: "",
  password: "",
};

export const initialSignUpUserValues: ISignupPayload = {
  email: "",
  organization: "",
  designation: "",
  department_count: 0,
  service_providers: [],
};
