import { Field, ErrorMessage } from "formik";
import FormError from "./FormError";
import { ReactElement } from "react";

import "./styles/style.css";

interface IProps {
  label?: string;
  name: string;
  options?: { label: string; value: string }[];
  className?: string;
  onClick?: () => void;
  placeholder?: string;
}

const Select = (props: IProps): ReactElement => {
  const { label, name, options, className, onClick, placeholder, ...other } =
    props;
  return (
    <>
      <label htmlFor={name}>{label}</label>

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
