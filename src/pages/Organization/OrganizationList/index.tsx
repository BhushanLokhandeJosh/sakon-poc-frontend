import { useState } from "react";
import { GridCellParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import useToggle from "../../../shared/CustomHooks/useToggle";

import OrganizationListing from "./component";
import OrganizationModal from "./component/ServiceProviderModal";
import ServiceProviderModal from "./component/ServiceProviderModal";
import ServiceProviderListing from "./component";

const ServiceProvidersContainer = () => {
  const { isOpen, handleToggle } = useToggle();
  const [serviceProviders, setServiceProviders] = useState<any>();

  const handleServiceProvidersReset = () => {
    if (serviceProviders) {
      setServiceProviders(undefined);
    }
    handleToggle();
  };

  const handleEditServiceProviders = (value: GridCellParams) => {
    setServiceProviders(value);
    handleToggle();
  };

  return (
    <Box>
      {isOpen && (
        <ServiceProviderModal
          isOpen={isOpen}
          toggleModal={handleServiceProvidersReset}
          serviceProvider={serviceProviders}
        />
      )}
      <ServiceProviderListing
        toggleModal={handleServiceProvidersReset}
        handleEditServiceProviders={handleEditServiceProviders}
      />
    </Box>
  );
};

export default ServiceProvidersContainer;
