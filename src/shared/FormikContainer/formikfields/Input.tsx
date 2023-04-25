import { Field, ErrorMessage } from "formik";
import FormError from "./FormError";
import { ReactElement } from "react";
import { TextField } from "@mui/material";

interface IProps {
  label?: string;
  name: string;
  type?:
    | "text"
    | "date"
    | "time"
    | "textarea"
    | "select"
    | "email"
    | "password"
    | "number"
    | "file";
  className?: string;
}

const Input = (props: IProps): ReactElement => {
  const { label, name, className, ...other } = props;
  return (
    <>
      <div className="label-style">
        <label htmlFor={name}>{label}</label>
      </div>

      <div>
      <Field id={name} name={name} className={className} {...other} />
      <ErrorMessage name={name} component={FormError} />
      </div>
    </>
  );
};

export default Input;
