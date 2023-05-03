import Select from "react-select";
import { ValueType } from "react-select/lib/types";

import { CustomSelectProps, Option } from "./types";

import "./styles/styles.css";

export const CustomSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
  menuPlacement,
  maxMenuHeight,
}: CustomSelectProps) => {
  const onChange = (option: ValueType<Option | Option[]>) => {
    form.setFieldValue(
      field.name,
      isMulti
        ? (option as Option[]).map((item: Option) => item.value)
        : (option as Option).value
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option) => field.value.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    } else {
      return isMulti ? [] : ("" as any);
    }
  };

  return (
    <Select
      id={field.name}
      className={className}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
      menuPlacement={menuPlacement}
      maxMenuHeight={maxMenuHeight}
    />
  );
};

export default CustomSelect;
