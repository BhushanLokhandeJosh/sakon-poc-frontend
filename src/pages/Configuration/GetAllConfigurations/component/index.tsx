import ConfigurationDataTable from "./ConfigurationDataTable";

import PageComponent from "../../../../shared/PageComponent/PageComponent";

function GetAllConfigurations() {
  return (
    <PageComponent
      pageTitle="Configurations"
      buttonLabel="Create Configuration"
      pageBody={<ConfigurationDataTable />}
    />
  );
}

export default GetAllConfigurations;
