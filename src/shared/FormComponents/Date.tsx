import { ErrorMessage, Field } from "formik";

import FormError from "./FormError";

import "./styles/style.css";
import { InputLabel } from "@mui/material";

interface IDateElementProps {
  label?: string;
  name: string;
  value?:string
}

const Date = (props: IDateElementProps) => {
  const { label, name, value } = props;

  return (
    <>
      <InputLabel htmlFor={name} sx={{ color: "black" }}>
        {label}
      </InputLabel>

      <Field id={name} type="date" name={name} value={value} className="form-control"></Field>
      <ErrorMessage name={name} component={FormError} />
    </>
  );
};

export default Date;
