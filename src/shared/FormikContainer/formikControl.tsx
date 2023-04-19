import React, { ReactElement } from "react";
import Input from "./formikfields/Input";
import TextArea from "./formikfields/TextArea";
import Select from "./formikfields/Select";

interface IProps {
  control: string;
  type?:
    | "text"
    | "date"
    | "time"
    | "textarea"
    | "select"
    | "email"
    | "password"
    | "number"
    | "file" ;
  name: string;
  label: string;
  className?: string;
  id?: string;
  style?: string;
  disabled?: boolean;
  placeholder?: string;
  options?: { key: string; value: string }[];
}

const FormikControl = (props: IProps) => {
  const { control, ...other } = props;
  switch (control) {
    case "input":
      return <Input {...other} />;
    case "textarea":
      return <TextArea {...other} />;
    case "select":
      return <Select {...other} />;
    default:
      return <div>Not A Proper Control</div>;
  }
};

export default FormikControl;
