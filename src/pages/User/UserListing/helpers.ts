import * as Yup from "yup";
import { ADMIN, SUPER_ADMIN } from "./types";

export const userValidationSchema = Yup.object({
  name: Yup.string().required("Organization Name Required"),
  email: Yup.string().email("Not a proper email"),
  role: Yup.string().notRequired(),

  Department: Yup.array().when("role", {
    is: (val: any) => val === ADMIN,
    then: (schema) => schema.required("Department Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  org: Yup.number().when("role", {
    is: (val: any) => val === SUPER_ADMIN,
    then: (schema) => schema.required("Organization Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
});
