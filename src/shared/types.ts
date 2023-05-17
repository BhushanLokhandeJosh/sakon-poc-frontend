import { FormikProps } from "formik";

export enum MAX_WIDTH {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export interface IFormikProps<T> extends FormikProps<T> {}

/**
 *  Used for object with any fields when key of of type string and value with any type.
 */
export interface IObjectWithAnyFields {
  [key: string]: any;
}
<<<<<<< HEAD


=======
>>>>>>> 1d1550bf35371fb414468bbf278ecdc5c7901dd2
