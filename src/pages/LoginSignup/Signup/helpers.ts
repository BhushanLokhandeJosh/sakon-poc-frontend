import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  email: Yup.string().email().required("Email Required"),
  organization: Yup.string().required("Organization Name required"),
  department_count: Yup.number().required("Department Count Required"),
  designation: Yup.string().required("Designation Required"),
  service_providers: Yup.array().min(1).required("Choose Service providers"),
});
