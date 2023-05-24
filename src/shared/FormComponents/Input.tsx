import { ChangeEvent, ReactElement } from "react";
import { Field, ErrorMessage } from "formik";
import { InputLabel } from "@mui/material";

import FormError from "./FormError";

import "./styles/styles.css";
import { INPUT_TYPE } from "../types";

interface InputElementProps {
  label?: string;
  name: string;
  type: INPUT_TYPE;
  className?: string;
  placeholder?: string;
  value: string | Blob;
  onChange?: Function;
  formikSetFieldValue?: any;
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
          <input
            type="file"
            id="template"
            name="template"
            className="input-file-field"
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
