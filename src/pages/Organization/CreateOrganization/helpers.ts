import * as Yup from "yup";

export const organizationValidationSchema = Yup.object({
  name: Yup.string().required("Organization Name Required"),
  department_count: Yup.number().required("Department Count Required"),
  service_providers: Yup.array().min(1).required("Choose configurations"),
});


export const serviceProviders = [
  {
    label: "Jio",
    value: "Jio",
  },
  {
    label: "VI",
    value: "VI",
  },
  {
    label: "Verizone",
    value: "Verizone",
  },
  {
    label: "Idea",
    value: "Idea",
  },
  {
    label: "MI",
    value: "MI",
  },
];