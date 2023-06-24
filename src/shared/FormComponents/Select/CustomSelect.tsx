import Select from "react-select";
import { ValueType } from "react-select/lib/types";
import { FieldProps } from "formik";
import { OptionsType } from "react-select/lib/types";

export interface Option {
  label: string;
  value: string;
}

export interface ICustomSelectProps extends FieldProps {
  options: OptionsType<Option>;
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
  menuShouldScrollIntoView?: boolean;
  maxMenuHeight?: number;
}

export const CustomSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
  menuShouldScrollIntoView,
  maxMenuHeight,
}: ICustomSelectProps) => {
  /*onChange function handles:
  1.isMulti is true then just set field value of formik field with mapping over 
  selected options.
  2.isMulti is false then just set field value of formik field with selected 
  options.*/
  const onChange = (option: ValueType<Option | Option[]>) => {
    form.setFieldValue(
      field.name,
      isMulti
        ? (option as Option[])?.map((item: Option) => item?.value)
        : (option as Option)?.value
    );
  };

  /*getValue function checks: 
  1.isMulti is true then after selecting one option just filter out that 
  option from select options list so that user cann't select same option for 
  multiple times.
  2.isMulti is false then just find selected option. */

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option) => field.value?.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    } else {
      return isMulti ? [] : ("" as any);
    }
  };

  return (
    <Select
      className={className}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
      menuShouldScrollIntoView={menuShouldScrollIntoView}
      maxMenuHeight={maxMenuHeight}
    />
  );
};

export default CustomSelect;
