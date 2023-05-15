import GetAllConfDataTable from "./GetAllConfDataTable";

import PageComponent from "../../../../shared/PageComponent/PageComponent";

interface IProps {
  useCustomFetch: any;
}

function GetAllConfigurations({ useCustomFetch }: IProps) {
  return (
    <div>
      <PageComponent
        pageTitle="Configurations"
        buttonLabel="Create Configuration"
        pageBody={<GetAllConfDataTable useCustomFetch={useCustomFetch} />}
      />
    </div>
  );
}

export default GetAllConfigurations;
