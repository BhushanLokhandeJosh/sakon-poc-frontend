import ConfigurationDataTable from "./ConfigurationDataTable";

import PageComponent from "../../../../shared/PageComponent/PageComponent";

interface IProps {
  useCustomFetch: any;
}

function GetAllConfigurations({ useCustomFetch }: IProps) {
  return (
    <PageComponent
      pageTitle="Configurations"
      buttonLabel="Create Configuration"
      pageBody={<ConfigurationDataTable useCustomFetch={useCustomFetch} />}
    />
  );
}

export default GetAllConfigurations;
