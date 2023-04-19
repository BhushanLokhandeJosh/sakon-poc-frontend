import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
  carrierName: "",
  websiteURL: "",
  sftpLocation: "",
  downloadPath: "",
  uploadPath: "",
  template: "",
};

export interface InitialValuesProps {
  id?:number,
  email: string;
  password: string;
  carrierName: string;
  websiteURL: string;
  sftpLocation: string;
  downloadPath: string;
  uploadPath: string;
  template: string;
}

export const validationSchema = Yup.object({
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
  websiteURL: Yup.string().required("Website URL Required"),
  sftpLocation: Yup.string().required("Sftp Location Required"),
  downloadPath: Yup.string().required("Download Path Required"),
  uploadPath: Yup.string().required("Upload Path Required"),
  template: Yup.string().required("Template Required"),
});
