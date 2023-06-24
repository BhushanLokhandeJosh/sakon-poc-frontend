import { Box } from "@mui/material";

import { ServiceProvidersColumns } from "../../constants";

import "./styles/styles.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import { useFetchServiceProviders } from "../../organization-hooks";

const ServiceProviderListing = ({
  toggleModal,
  handleEditServiceProviders,
}: any) => {
  return (
    <Box>
      <PageComponent
        pageTitle="Service Providers"
        buttonLabel="Create Service"
        handleButtonAction={toggleModal}
        pageBody={
          <CustomTable
            searchConfiguration={{ isSearchBoxVisible: true }}
            columnHeaders={ServiceProvidersColumns(handleEditServiceProviders)}
            useCustomFetch={useFetchServiceProviders}
          />
        }
      />
    </Box>
  );
};

export default ServiceProviderListing;
