import React from "react";
import { ErrorMessage, Field } from "formik";

import "./styles/style.css";
import FormError from "./FormError";

interface IProps {
  className?: string;
  name: string;
  options?: { label: string; value: string }[];
  component?: any;
  placeholder?: string;
  isMulti?: boolean;
}

const MultiSelect = (props: IProps) => {
  const { className, name, options, component, placeholder, isMulti } = props;
  return (
    <>
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
