import PageComponent from "../../../../shared/PageComponent/PageComponent";
import GetAllSchedulersDataTable from "./GetAllSchedulersDataTable";

interface IProps {
  useCustomFetch: any;
}
function GetAllSchedulersComponent({ useCustomFetch }: IProps) {
  return (
    <div>
      <PageComponent
        pageTitle="Schedulers"
        pageBody={<GetAllSchedulersDataTable useCustomFetch={useCustomFetch} />}
      />
    </div>
  );
}

export default GetAllSchedulersComponent;
