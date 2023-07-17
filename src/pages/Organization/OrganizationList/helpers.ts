import * as Yup from "yup";

export const serviceProviderValidationSchema = Yup.object({
  name: Yup.string().required("Name Required"),
  url: Yup.string().required("Url Required"),
});
