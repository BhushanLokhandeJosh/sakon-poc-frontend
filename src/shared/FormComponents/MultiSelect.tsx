import { ErrorMessage, Field } from "formik";

import FormError from "./FormError";

import "./styles/style.css";
import { InputLabel } from "@mui/material";

interface IMultiSelectProps {
  className?: string;
  name: string;
  options?: { label: string; value: string }[];
  component?: any;
  placeholder?: string;
  isMulti?: boolean;
  label?: string;
  menuPlacement?: string;
  menuShouldScrollIntoView?: boolean;
}

const MultiSelect = (props: IMultiSelectProps) => {
  const {
    className,
    name,
    options,
    component,
    placeholder,
    isMulti,
    label,
    menuPlacement,
    menuShouldScrollIntoView,
  } = props;
  return (
    <>
      <div className="label-style">
        <InputLabel htmlFor={name}>{label}</InputLabel>
      </div>

      <Field
        className={className}
        name={name}
        options={options}
        component={component}
        placeholder={placeholder}
        isMulti={isMulti}
        menuPlacement={menuPlacement}
        menuShouldScrollIntoView={menuShouldScrollIntoView}
      />
      <ErrorMessage name={name} component={FormError} />
    </>
  );
};

export default MultiSelect;
