import { useState } from "react";
import { GridCellParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import useToggle from "../../../shared/CustomHooks/useToggle";

import OrganizationListing from "./component";
import OrganizationModal from "./component/OrganizationModal";

const OrganizationsContainer = () => {
  const { isOpen, handleToggle } = useToggle();
  const [organization, setOrganization] = useState<any>();

  const handleOrganizationReset = () => {
    if (organization) {
      setOrganization(undefined);
    }
    handleToggle();
  };

  const handleEditOrganization = (value: GridCellParams) => {
    setOrganization(value);
    handleToggle();
  };

  return (
    <Box>
      {isOpen && (
        <OrganizationModal
          isOpen={isOpen}
          toggleModal={handleOrganizationReset}
          organization={organization}
        />
      )}
      <OrganizationListing
        toggleModal={handleOrganizationReset}
        handleEditOrganization={handleEditOrganization}
      />
    </Box>
  );
};

export default OrganizationsContainer;
