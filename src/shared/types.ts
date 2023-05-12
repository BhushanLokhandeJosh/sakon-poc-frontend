import { FormikProps } from "formik";

export enum MAX_WIDTH {
<<<<<<< HEAD
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
=======
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg",
    XL = "xl"
}

export interface IFormikProps<T> extends FormikProps<T> {}
>>>>>>> e2b953c2d7abcf79b65ec4bd516bd43ef822361d
