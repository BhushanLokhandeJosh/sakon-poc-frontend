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

/**
 *  Used for object with any fields when key of of type string and value with any type.
 */
export interface IObjectWithAnyFields {
  [key: string]: any;
}

export interface IChartDataOption {
  name: string;
  value: number;
}
