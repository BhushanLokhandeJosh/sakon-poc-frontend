import { ReactElement } from "react";
import { ErrorMessage, Field } from "formik";

import FormError from "./FormError";

import { TextAreaElementProps } from "./types";

import "./styles/styles.css"

const TextArea = (props: TextAreaElementProps): ReactElement => {
  const { label, name } = props;
  return (
    <>
      <label
        htmlFor={name}
        className="label-field-style"
      >
        {label}
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
      />
      <ErrorMessage name={name} component={FormError} />
    </>
  );
};

export default TextArea;
