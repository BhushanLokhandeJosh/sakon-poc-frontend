import { ReactElement } from "react";
import { Field, ErrorMessage } from "formik";

import FormError from "./FormError";

import { InputElementProps } from "./types";

import "./styles/styles.css";

const Input = (props: InputElementProps): ReactElement => {
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
