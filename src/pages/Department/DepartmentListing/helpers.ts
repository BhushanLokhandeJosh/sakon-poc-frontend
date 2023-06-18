import * as Yup from "yup";

export const departmentValidationSchema = Yup.object({
  name: Yup.string().required("Department Name Required"),
});
