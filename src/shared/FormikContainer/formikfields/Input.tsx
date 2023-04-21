import { Field, ErrorMessage } from "formik";
import FormError from "./FormError";
import { ReactElement } from "react";
import { TextField } from "@mui/material";

interface IProps {
  label: string;
  name: string;
  type?:
    | "text"
    | "date"
    | "time"
    | "textarea"
    | "select"
    | "email"
    | "password"
    | "number"
    | "file";
}

const Input = (props: IProps): ReactElement => {
  const { label, name, ...other } = props;
  return (
    <div>
      <div className="label-style">
        <label htmlFor={name} >
          {label}
        </label>
      </div>
      <div>
        <Field
          id={name}
          name={name}
          {...other}
          className="form-control text-field"
        />
        
        <ErrorMessage name={name} component={FormError} />
      </div>

    </div>
  );
};

export default Input;
