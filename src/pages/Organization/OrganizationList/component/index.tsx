import { organizationColumns } from "../../constants";

import "./styles/styles.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import { useFetchOrganization } from "../../organization-hooks";

const OrganizationListing = ({ toggleModal, handleEditOrganization }: any) => {
  return (
      <PageComponent
        pageTitle="Organization"
        buttonLabel="Create Organization"
        handleButtonAction={toggleModal}
        pageBody={
          <CustomTable
            searchConfiguration={{ isSearchBoxVisible: true }}
            columnHeaders={organizationColumns(handleEditOrganization)}
            useCustomFetch={useFetchOrganization}
            tableClassName="organization-table"
          />
        }
      />
  );
};

export default OrganizationListing;
