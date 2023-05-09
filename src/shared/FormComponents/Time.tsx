import { ErrorMessage, Field } from "formik";

import FormError from "./FormError";

import "./styles/styles.css";
import { InputLabel } from "@mui/material";

interface ITimeElementProps {
  label?: string;
  name: string;
  value?: string;
  className?: string;
}

const Time = (props: ITimeElementProps) => {
  const { label, name, className } = props;

  return (
    <>
      <InputLabel htmlFor={name} sx={{ color: "black" }}>
        {label}
      </InputLabel>
      <Field type="time" name={name} className={className}></Field>
      <ErrorMessage name={name} component={FormError} />
    </>
  );
};

export default Time;
