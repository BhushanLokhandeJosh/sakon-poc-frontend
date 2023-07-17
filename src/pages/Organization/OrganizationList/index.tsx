import { useCallback, useState } from "react";
import { GridCellParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import useToggle from "../../../shared/CustomHooks/useToggle";

import ServiceProviderModal from "./component/ServiceProviderModal";
import ServiceProviderListing from "./component";
import { IServiceProvidersPayload } from "./types";

const ServiceProvidersContainer = () => {
  const { isOpen:isServiceProviderModalOpen, handleToggle } = useToggle();
  const [serviceProviders, setServiceProviders] = useState<any>();

  const handleServiceProvidersReset = useCallback(() => {
    if (serviceProviders) {
      setServiceProviders(undefined);
    }
    handleToggle();
  },[serviceProviders, handleToggle]);

  const handleEditServiceProviders = useCallback((value: GridCellParams) => {
    setServiceProviders(value);
    handleToggle();
  },[handleToggle]);

  return (
    <Box>
      {isServiceProviderModalOpen && (
        <ServiceProviderModal
          isOpen={isServiceProviderModalOpen}
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
