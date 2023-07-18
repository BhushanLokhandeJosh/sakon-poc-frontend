import { useCallback, useState } from "react";
import { GridCellParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import useToggle from "../../../shared/CustomHooks/useToggle";

import DepartmentListing from "./component";
import DepartmentModal from "./component/DepartmentModal";

const DepartmentContainer = () => {
  const { isOpen, handleToggle } = useToggle();
  const [department, setDepartment] = useState<any>();

  const handleDepartmentReset = useCallback(() => {
    if (department) {
      setDepartment(undefined);
    }
    handleToggle();
  }, [department, handleToggle]);

  const handleEditDepartment = useCallback(
    (value: GridCellParams) => {
      setDepartment(value);
      handleToggle();
    },
    [department]
  );

  return (
    <Box>
      {isOpen && (
        <DepartmentModal
          isOpen={isOpen}
          toggleModal={handleDepartmentReset}
          department={department}
        />
      )}

      <DepartmentListing
        toggleModal={handleDepartmentReset}
        handleEditDepartment={handleEditDepartment}
      />
    </Box>
  );
};

export default DepartmentContainer;
