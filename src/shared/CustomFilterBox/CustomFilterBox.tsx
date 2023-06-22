interface ICustomFilterBoxProps {
  label: string;
  options: Array<{ label: string; value: string }>;
  className?: string;
  name?: string;
  handleChangeSelection?: () => void;
}

const CustomFilterBox = ({
  label,
  options,
  className,
  name,
  handleChangeSelection,
}: ICustomFilterBoxProps) => {
  return (
    <div className={className}>
      <label>{label}: </label>
      <select name={name} onChange={handleChangeSelection}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomFilterBox;
