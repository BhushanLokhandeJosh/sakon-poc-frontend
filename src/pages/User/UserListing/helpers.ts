import * as Yup from "yup";
import { ADMIN, SUPER_ADMIN } from "./types";

// fields = ( "name"(str), "email"(str),"role"(str),"org")  role="SUPERADMIN"
// 	fields = ("name"(str), "email"(str),"role"(str),"department","org") role="ADMIN"

export const userValidationSchema = Yup.object({
  name: Yup.string().required("Organization Name Required"),
  email: Yup.string().email("Not a proper email"),
  role: Yup.string().required("Role Required"),

  department: Yup.string().when("role", {
    is: (val: any) => val === ADMIN,
    then: (schema) => schema.required("Department Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  org: Yup.string().when("role",{
    is: (val: any) => val === SUPER_ADMIN,
    then: (schema) => schema.required("Organization Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
});
