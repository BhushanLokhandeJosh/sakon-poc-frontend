import { Box } from "@mui/material";

import { OrganizationColumns } from "../../constants";

import "./styles/styles.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import { useFetchOrganization } from "../../organization-hooks";

const OrganizationListing = ({ toggleModal, handleEditOrganization }: any) => {
  return (
    <Box>
      <PageComponent
        pageTitle="Organization"
        buttonLabel="Create Organization"
        handleButtonAction={toggleModal}
        pageBody={
          <CustomTable
            searchConfiguration={{ isSearchBoxVisible: true }}
            columnHeaders={OrganizationColumns(handleEditOrganization)}
            useCustomFetch={useFetchOrganization}
          />
        }
      />
    </Box>
  );
};

export default OrganizationListing;
