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
  // return (
  //   <div className="row">
  //     <div className="col-2"></div>
  //     <div className="col-3">
  //       <label htmlFor={name} className="label-style">
  //         {label}
  //       </label>
  //     </div>
  //     <div className="col-3">
  //       <Field
  //         id={name}
  //         name={name}
  //         {...other}
  //         className="form-control text-field"
  //       />
  //       <ErrorMessage name={name} component={FormError} />
  //     </div>

  //     <div className="col-2"></div>
  //   </div>
  // );

  return (
    <div>
      <div className="label-text">
        <label htmlFor={name} className="label-style">
          {label}
        </label>
      </div>
      <TextField
        id={name}
        type={name}
        className="input-field-style"
        style={{width:"100%"}}
        {...other}
      />
      <ErrorMessage name={name} component={FormError} />
    </div>
  );
};

export default Input;
