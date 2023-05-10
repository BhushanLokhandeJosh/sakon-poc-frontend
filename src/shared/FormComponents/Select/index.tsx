import { ErrorMessage, Field } from "formik";
import { InputLabel } from "@mui/material";

import FormError from "../FormError";
import CustomSelect from "./CustomSelect";

interface IMultiSelectProps {
  className?: string;
  name: string;
  options?: { label: string; value: string }[];
  placeholder?: string;
  isMulti?: boolean;
  label?: string;
  menuPlacement?: string;
  maxMenuHeight?: number;
  menuShouldScrollIntoView?: boolean;
}

const Select = (props: IMultiSelectProps) => {
  const {
    className,
    name,
    options,
    placeholder,
    isMulti,
    label,
    menuPlacement,
    menuShouldScrollIntoView,
    maxMenuHeight,
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
        component={CustomSelect}
        placeholder={placeholder}
        isMulti={isMulti}
        menuPlacement={menuPlacement}
        menuShouldScrollIntoView={menuShouldScrollIntoView}
        maxMenuHeight={maxMenuHeight}
      />
      <ErrorMessage name={name} component={FormError} />
    </>
  );
};

export default Select;
