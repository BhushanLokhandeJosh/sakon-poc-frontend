import { ReactElement } from "react";
import { Field, ErrorMessage } from "formik";

import FormError from "./FormError";

import { SelectElementProps } from "./types";

import "./styles/style.css";

const Select = (props: SelectElementProps): ReactElement => {
  const { label, name, options, className, onClick, placeholder, ...other } =
    props;
  return (
    <>
      <label htmlFor={name} className="label-field-style">{label}</label>

      <Field
        as="select"
        id={name}
        name={name}
        {...other}
        onClick={onClick}
        className={className}
        placeholder={placeholder}
      >
        {options?.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>

      <div>
        <ErrorMessage name={name} component={FormError} />
      </div>
    </>
  );
};

export default Select;
