import { ReactElement } from "react";
import { ErrorMessage, Field } from "formik";
import { InputLabel } from "@mui/material";

import FormError from "./FormError";

import "./styles/styles.css";

interface ITextAreaElementProps {
  label?: string;
  name: string;
}

const TextArea = (props: ITextAreaElementProps): ReactElement => {
  const { label, name } = props;
  return (
    <>
      <div className="label-style">
        <InputLabel htmlFor={name}>{label}</InputLabel>
      </div>
      <Field as="textarea" id={name} name={name} />
      <ErrorMessage name={name} component={FormError} />
    </>
  );
};

export default TextArea;
