import { ReactElement } from "react";
import { Field, ErrorMessage } from "formik";
import InputLabel from "@mui/material/InputLabel";

import FormError from "./FormError";

import "./styles/styles.css";

interface IInputElementProps {
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
  placeholder?: string;
}

const Input = (props: IInputElementProps): ReactElement => {
  const { label, name, className, placeholder, type } = props;
  return (
    <>
      <div className="label-style">
        <InputLabel htmlFor={name}>{label}</InputLabel>
      </div>

      <div>
        <Field
          type={type}
          id={name}
          name={name}
          className={className}
          placeholder={placeholder}
        />
        <ErrorMessage name={name} component={FormError} />
      </div>
    </>
  );
};

export default Input;
