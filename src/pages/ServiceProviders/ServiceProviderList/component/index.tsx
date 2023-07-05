import { Box } from "@mui/material";

import { ServiceProvidersColumns } from "../../constants";

import "./styles/styles.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import { useFetchServiceProviders } from "../../organization-hooks";
import { useSelector } from "react-redux";
import { SUPER_ADMIN } from "../../../User/UserListing/types";

const ServiceProviderListing = ({
  toggleModal,
  handleEditServiceProviders,
}: any) => {
  //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  return (
    <Box>
      <PageComponent
        pageTitle="Service Providers"
        buttonLabel={loggedInUser?.type === SUPER_ADMIN ? "Create Service" : ""}
        handleButtonAction={toggleModal}
        pageBody={
          <CustomTable
            searchConfiguration={loggedInUser?.type === SUPER_ADMIN ? { isSearchBoxVisible: true } :  { isSearchBoxVisible: false }}
            columnHeaders={ServiceProvidersColumns(handleEditServiceProviders)}
            useCustomFetch={useFetchServiceProviders}
          />
        }
      />
    </Box>
  );
};

export default ServiceProviderListing;
