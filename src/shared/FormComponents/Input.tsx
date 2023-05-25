import { ChangeEvent, ReactElement } from "react";
import { Field, ErrorMessage } from "formik";
import { InputLabel } from "@mui/material";

import FormError from "./FormError";
import { INPUT_TYPE } from "../types";

import "./styles/styles.css";

interface InputElementProps {
  label?: string;
  name: string;
  type: INPUT_TYPE;
  className?: string;
  placeholder?: string;
  value: string | Blob;
  formikSetFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => void;
}

const Input = (props: InputElementProps): ReactElement => {
  const {
    label,
    name,
    className,
    type,
    placeholder,
    value,
    formikSetFieldValue,
  } = props;

  const handleFileChange = (fileNameAttribute: string, event: any) => {
    formikSetFieldValue(fileNameAttribute, event.currentTarget.files[0]);
  };

  return (
    <>
      <InputLabel htmlFor={name} sx={{ color: "black" }}>
        {label}
      </InputLabel>

      <div>
        {type !== INPUT_TYPE.FILE ? (
          <Field
            id={name}
            value={value}
            name={name}
            className={className}
            type={type}
            placeholder={placeholder}
          />
        ) : (
          // This input type For Handling Files in input forms.
          <input
            type={INPUT_TYPE.FILE}
            id={name}
            name={name}
            className={className}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleFileChange(name, event)
            }
          />
        )}

        <ErrorMessage name={name} component={FormError} />
      </div>
    </>
  );
};

export default Input;
