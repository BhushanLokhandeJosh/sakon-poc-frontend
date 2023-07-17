import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
    email: Yup.string().email("Not a proper email").required("Email Required"),
    password: Yup.string().required("Password Required")
  });

