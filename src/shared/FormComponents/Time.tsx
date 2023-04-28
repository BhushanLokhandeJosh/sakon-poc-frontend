import { ErrorMessage, Field } from "formik";

import FormError from "./FormError";

import { TimeElementProps } from "./types";

import "./styles/styles.css";

const Time = (props: TimeElementProps) => {
  const { label, name, className } = props;

  return (
    <>
      <label htmlFor={name} className="label-field-style">
        {label}
      </label>
      <Field type="time" name={name} className={className}></Field>
      <ErrorMessage name={name} component={FormError} />
    </>
  );
};

export default Time;
