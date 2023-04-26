import { ErrorMessage, Field } from "formik";

import FormError from "./FormError";
import { DateElementProps } from "./types";

import "./styles/style.css";

const Date = (props:DateElementProps) => {
  const { label, name } = props;

  return (
    <>
      <label
        htmlFor={name}
        className="label-field-style"
      >
        {label}
      </label>
      <Field id={name} type="date" name={name} className="form-control">
      </Field>
      <ErrorMessage name={name} component={FormError} />
    </>
  );
};

export default Date;
