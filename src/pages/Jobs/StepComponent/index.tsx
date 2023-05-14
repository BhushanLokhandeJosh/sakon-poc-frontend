import { useState } from "react";
import StepComponent from "./component";

const StepContainer = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <StepComponent value={value} handleChange={handleChange}/>
  );
};

export default StepContainer;
