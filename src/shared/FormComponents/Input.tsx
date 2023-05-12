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
    | "file"
    | "radio";
  className?: string;
  placeholder?: string;
  value: string | Blob;
}

const Input = (props: InputElementProps): ReactElement => {
  const { label, name, className, type, placeholder, value } = props;
  return (
    <>
      <InputLabel htmlFor={name} sx={{ color: "black" }}>
        {label}
      </InputLabel>

      <div>
        <Field
          id={name}
          name={name}
          className={className}
          type={type}
          placeholder={placeholder}
          value={value}
        />
        <ErrorMessage name={name} component={FormError} />
      </div>
    </>
  );
};

export default Input;
