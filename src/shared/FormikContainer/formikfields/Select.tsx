import { Field, ErrorMessage } from "formik";
import FormError from "./FormError";
import { ReactElement } from "react";

interface IProps {
  label:string,
  name:string,
  options?: { key: string; value: string }[];
}

const Select = (props:IProps):ReactElement => {
  const { label, name, options, ...other } = props;
  return (
    <div>
      <label
        htmlFor={name}
        style={{ fontSize: "25px", fontWeight: "bold" }}
      >
        {label}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        {...other}
        className="form-control"
      >
        {options?.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={FormError} />
    </div>
  );
};

export default Select;
