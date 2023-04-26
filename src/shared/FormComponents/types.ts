import { FieldProps } from "formik";
import { OptionsType } from "react-select/lib/types";

export interface InputElementProps {
  label?: string;
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
  className?: string;
  placeholder?:string
}

export interface DateElementProps {
  label?: string;
  name: string;
}

export interface MultiSelectProps {
  className?: string;
  name: string;
  options?: { label: string; value: string }[];
  component?: any;
  placeholder?: string;
  isMulti?: boolean;
  label?:string
}

export interface SelectElementProps {
  label?: string;
  name: string;
  options?: { label: string; value: string }[];
  className?: string;
  onClick?: () => void;
  placeholder?: string;
}

export interface Option {
  label:string
  value: string;
}

export interface CustomSelectProps extends FieldProps {
  options: OptionsType<Option>;
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
}

export interface TextAreaElementProps {
  label?: string;
  name: string;
}


export interface TimeElementProps {
  label?: string;
  name: string;
  value?: string;
  className?:string;
}

export interface ErrorComponentProps {
  children?: string;
}


