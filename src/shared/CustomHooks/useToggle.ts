import { useState } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, handleToggle };

};

export default useToggle;
