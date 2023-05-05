import * as Yup from "yup";
import { IConfigurationValues } from "./types";

export const initialValues: IConfigurationValues = {
  configurationName: "",
  department: "",
  email: "",
  password: "",
  carrierName: "",
  sftpLogin: "",
  sftpPassword: "",
  sftpLocation: "",
  downloadPath: "",
  template: "",
};

export const validationSchema = Yup.object({
  configurationName: Yup.string().required("Configuration Name Required"),
  department: Yup.string().required("Department Required"),
  email: Yup.string()
    .trim()
    .lowercase()
    .email("Invalid email format")
    .required("Email Required"),
  password: Yup.string()
    .trim()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Minimum eight characters, at least one letter, one number and one special character"
    )
    .required("Password Required"),
  carrierName: Yup.string().required("Carrier Name is Must"),
  sftpLogin: Yup.string().required("Login Credential is Required"),
  sftpPassword: Yup.string().required("Password Required"),
  sftpLocation: Yup.string().required("Sftp Location Required"),
  downloadPath: Yup.string().required("Download Path Required"),
  template: Yup.string().required("Template Required"),
});

export const formDataMapping = (values: IConfigurationValues) => {
  console.log(values);
  const {
    configurationName,
    department,
    email,
    password,
    carrierName,
    downloadPath,
    template,
    sftpLocation,
    sftpLogin,
    sftpPassword,
  } = values;
  let form = new FormData();
  form.append("config-name", configurationName);
  form.append("dept-name", department);
  form.append("email", email);
  form.append("password", password);
  form.append("created-by-empid", "1");
  form.append("carrier-name", carrierName);
  form.append("website-url", downloadPath);
  form.append("template", template);
  form.append("sftp-path", sftpLocation);
  form.append("sftp-login", sftpLogin);
  form.append("sftp-password", sftpPassword);

  console.log(form.get("sftp-login"));
  return form;
};
