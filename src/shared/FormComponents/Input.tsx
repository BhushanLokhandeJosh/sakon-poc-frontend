import { ReactElement } from "react";
import { Field, ErrorMessage } from "formik";
import { InputLabel } from "@mui/material";

import FormError from "./FormError";

import "./styles/styles.css";

interface InputElementProps {
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

const Input = (props: InputElementProps): ReactElement => {
  const { label, name, className, type, placeholder } = props;
  return (
    <>
      <div className="label-style">
        <InputLabel htmlFor={name}>{label}</InputLabel>
      </div>

      <div>
        <Field
          id={name}
          name={name}
          className={className}
          type={type}
          placeholder={placeholder}
        />
        <ErrorMessage name={name} component={FormError} />
      </div>
    </>
  );
};

export default Input;
