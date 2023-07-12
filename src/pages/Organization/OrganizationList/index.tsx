import { useCallback, useState } from "react";
import { GridCellParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import useToggle from "../../../shared/CustomHooks/useToggle";

import OrganizationListing from "./component";
import OrganizationModal from "./component/OrganizationModal";
import { IOrganizationPayload } from "./types";

const OrganizationsContainer = () => {
  const { isOpen, handleToggle } = useToggle();
  const [organization, setOrganization] = useState<any>();

  const handleOrganizationReset = useCallback(() => {
    if (organization) {
      setOrganization(undefined);
    }
    handleToggle();
  }, [isOpen]);

  const handleEditOrganization = useCallback(
    (value: GridCellParams) => {
      setOrganization(value);
      handleToggle();
    },
    [isOpen]
  );

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
