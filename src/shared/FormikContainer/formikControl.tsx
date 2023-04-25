import React, { ReactElement } from "react";
import Input from "./formikfields/Input";
import TextArea from "./formikfields/TextArea";
import Select from "./formikfields/Select";
import Date from "./formikfields/Date";
import Time from "./formikfields/Time";
import MultiSelect from "./formikfields/MultiSelect";

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
    | "file";
  name: string;
  label?: string;
  className?: string;
  id?: string;
  style?: string;
  disabled?: boolean;
  placeholder?: string;
  options?: { label: string; value: string}[];
  value?:string;
  onClick?:() => void;
  isMulti?:boolean;
  component?:any;
  variant?:string;
  color?:string;
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
    case "date":
      return <Date {...other} />;
    case "multi-select":
      return <MultiSelect {...other} />
    case "time":
      return <Time {...other} />;
    default:
      return <div>Not A Proper Control</div>;
  }
};

export default FormikControl;
