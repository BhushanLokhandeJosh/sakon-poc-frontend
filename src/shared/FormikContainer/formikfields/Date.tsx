import { ErrorMessage, Field } from "formik";

import FormError from "./FormError";

interface IProps {
  label?:string,
  name:string,
 
}

const Date = (props:IProps) => {
  const { label, name,...other } = props;

  return (
    <>
      <label
        htmlFor={name}
        style={{ fontSize: "25px", fontWeight: "bold" }}
      >
        {label}
      </label>
      <Field type="date" name={name} className="form-control">
      </Field>
      <ErrorMessage name={name} component={FormError} />
    </>
  );
};

export default Date;
