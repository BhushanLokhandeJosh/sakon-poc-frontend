
import { BUTTON_LABEL, PAGE_TITLE, serviceProvidersColumns } from "../../constants";

import "./styles/styles.css";

import CustomTable from "../../../../shared/CustomTable/CustomTable";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import { useFetchServiceProviders } from "../../organization-hooks";

const ServiceProviderListing = ({
  toggleModal,
  handleEditServiceProviders,
}: any) => {
  return (
      <PageComponent
        pageTitle={PAGE_TITLE}
        buttonLabel={BUTTON_LABEL}
        handleButtonAction={toggleModal}
        pageBody={
          <CustomTable
            searchConfiguration={{ isSearchBoxVisible: true }}
            columnHeaders={serviceProvidersColumns(handleEditServiceProviders)}
            useCustomFetch={useFetchServiceProviders}
            tableClassName="service-provider-table"
          />
        }
      />
  );
};

export default ServiceProviderListing;
