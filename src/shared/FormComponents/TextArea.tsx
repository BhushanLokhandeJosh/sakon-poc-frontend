import { ReactElement } from "react";
import { ErrorMessage, Field } from "formik";
import { InputLabel } from "@mui/material";

import FormError from "./FormError";

import "./styles/styles.css";

interface ITextAreaElementProps {
  label?: string;
  name: string;
  value?: string;
}

const TextArea = (props: ITextAreaElementProps): ReactElement => {
  const { label, name, value } = props;
  return (
    <>
      <InputLabel htmlFor={name} sx={{ color: "black" }}>
        {label}
      </InputLabel>
      <Field as="textarea" id={name} name={name} value={value} />
      <ErrorMessage name={name} component={FormError} />
    </>
  );
};

export default TextArea;
