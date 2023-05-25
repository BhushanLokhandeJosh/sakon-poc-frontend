import { ChangeEvent, ReactElement } from "react";
import { Field, ErrorMessage } from "formik";
import { InputLabel } from "@mui/material";

import FormError from "./FormError";

import "./styles/styles.css";
import { INPUT_TYPE } from "../types";

interface CommonProps {
  label?: string;
  name: string;
  className?: string;
  placeholder?: string;
  value: string | Blob;
}

interface InputElementProps extends CommonProps {
  type: Exclude<INPUT_TYPE, INPUT_TYPE.FILE>;
  formikSetFieldValue?: never;
}

interface FileElementProps extends CommonProps {
  type: INPUT_TYPE.FILE;
  formikSetFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => void;
}

type InputComponentProps = InputElementProps | FileElementProps;

const Input = (props: InputComponentProps): ReactElement => {
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
    formikSetFieldValue &&
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
