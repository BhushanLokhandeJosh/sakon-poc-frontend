import { FormikProps } from "formik";

export enum MAX_WIDTH {
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg",
    XL = "xl"
}

export interface IFormikProps<T> extends FormikProps<T> {}

export interface IObjectWithAnyFields {
  [key: string]: any;
}