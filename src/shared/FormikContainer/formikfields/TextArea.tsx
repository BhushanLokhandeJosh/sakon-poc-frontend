import { ErrorMessage, Field } from "formik";
import FormError from "./FormError";
import { ReactElement } from "react";

interface IProps {
  label?: string;
  name: string;
}

const TextArea = (props: IProps): ReactElement => {
  const { label, name, ...other } = props;
  return (
    <>
      <label
        htmlFor={name}
        className="col-sm-2 col-form-label"
        style={{ fontSize: "25px", fontWeight: "bold" }}
      >
        {label}
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
        {...other}
        className="form-control"
      />
      <ErrorMessage name={name} component={FormError} />
    </>
  );
};

export default TextArea;
