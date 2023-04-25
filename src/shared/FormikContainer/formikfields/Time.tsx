import { ErrorMessage, Field } from "formik";

import FormError from "./FormError";

interface IProps {
  label?: string;
  name: string;
  value?: string;
  className?:string;
}

const Time = (props: IProps) => {
  const { label, name, value,className, ...other } = props;

  return (
    <>
      <label htmlFor={name} style={{ fontSize: "25px", fontWeight: "bold" }}>
        {label}
      </label>
      <Field
        type="time"
        name={name}
        // value={value}
        className={className}
      ></Field>
      <ErrorMessage name={name} component={FormError} />
    </>
  );
};

export default Time;
