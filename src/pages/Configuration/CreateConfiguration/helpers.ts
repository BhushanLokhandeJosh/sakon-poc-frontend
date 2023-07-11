import * as Yup from "yup";
import { IConfiguration } from "./types";

export const validationSchema = Yup.object({
  configurationName: Yup.string().required("Configuration Name Required"),
  department: Yup.string().required("Department Required"),
  email: Yup.string()
    .trim()
    .lowercase()
    .email("Invalid email format")
    .required("Email Required"),
  // password: Yup.string()
  //   .trim()
  //   .matches(
  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //     "Minimum eight characters, at least one letter, one number and one special character"
  //   )
  //   .required("Password Required"),
  carrierName: Yup.string().required("Carrier Name is Must"),
  sftpLogin: Yup.string().required("Login Credential is Required"),
  sftpPassword: Yup.string().required("Sftp Password Required"),
  sftpLocation: Yup.string().required("Sftp Location Required"),
  downloadPath: Yup.string().required("Download Path Required"),
  template: Yup.string().required("Template Required"),
});

/* As encoding type were set to "multipart/form-data",FormData() Method 
Provides a way to easily construct a set of key/value pairs representing
form fields and their values.*/

export const formDataMapping = (values: IConfiguration,loggedInUser:any ): FormData | any => {
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
  let form: FormData | any = new FormData();
  console.log("Form helper", {
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
  });

  form.append("name", configurationName);
  form.append("department", department);
  form.append("email", email);
  form.append("password", password);
  form.append("emp", loggedInUser.id);
  form.append("carrier", carrierName);
  form.append("website_url", downloadPath);
  form.append("template", template);
  form.append("sftp_path", sftpLocation);
  form.append("sftp_login", sftpLogin);
  form.append("sftp_password", sftpPassword);
  console.log("Form helper", form);
  return form;
};
