import { FormikProps } from "formik";

export enum MAX_WIDTH {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export enum INPUT_TYPE {
  TEXT = "text",
  DATE = "date",
  TIME = "time",
  TEXTAREA = "textarea",
  SELECT = "select",
  EMAIL = "email",
  PASSWORD = "password",
  NUMBER = "number",
  FILE = "file",
  RADIO = "radio",
}

export interface IFormikProps<T> extends FormikProps<T> {}
