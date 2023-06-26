import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";

import { useCreateDepartment } from "../department-hooks";
import useToggle from "../../../shared/CustomHooks/useToggle";

import CreateDepartment from "./component/DepartmentModal";
import { useState } from "react";
import { GridCellParams } from "@mui/x-data-grid";
import DepartmentListing from "./component";
import DepartmentModal from "./component/DepartmentModal";
import { Box } from "@mui/material";

const DepartmentContainer = () => {
  const { isOpen, handleToggle } = useToggle();
  const [department, setDepartment] = useState<any>();

  const handleDepartmentReset = () => {
    if (department) {
      setDepartment(undefined);
    }
    handleToggle();
  };

  const handleEditDepartment = (value: GridCellParams) => {
    setDepartment(value);
    handleToggle();
  };

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
