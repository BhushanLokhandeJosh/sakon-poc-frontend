import { ErrorMessage, Field } from "formik";

import FormError from "./FormError";

import { MultiSelectProps } from "./types";

import "./styles/style.css";

const MultiSelect = (props: MultiSelectProps) => {
  const { className, name, options, component, placeholder, isMulti,label } = props;
  return (
    <>
      <div className="label-style">
        <label htmlFor={name}>{label}</label>
      </div>

      <Field
        className={className}
        name={name}
        options={options}
        component={component}
        placeholder={placeholder}
        isMulti={isMulti}
      />
      <ErrorMessage name={name} component={FormError} />
    </>
  );
};

export default MultiSelect;

