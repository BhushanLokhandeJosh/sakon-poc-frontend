import { useCallback, useState } from "react";
import { GridCellParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import useToggle from "../../../shared/CustomHooks/useToggle";

import OrganizationListing from "./component";
import OrganizationModal from "./component/OrganizationModal";

const OrganizationsContainer = () => {
  const { isOpen:isOrganizationModalOpen, handleToggle } = useToggle();
  const [organization, setOrganization] = useState<any>();

  const handleOrganizationReset = useCallback(() => {
    if (organization) {
      setOrganization(undefined);
    }
    handleToggle();
  }, [isOrganizationModalOpen,organization]);

  const handleEditOrganization = useCallback(
    (value: GridCellParams) => {
      setOrganization(value);
      handleToggle();
    },
    [isOrganizationModalOpen]
  );

  return (
    <Box>
      {isOrganizationModalOpen && (
        <OrganizationModal
          isOpen={isOrganizationModalOpen}
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
