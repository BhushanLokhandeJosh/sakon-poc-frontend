import React from "react";
import PageComponent from "../../../shared/PageComponent/PageComponent";
import GetAllSchedulersDataTable from "./GetAllSchedulersDataTable";

interface IProps {
  useCustomFetch: any;
}
function GetAllSchedulerComponent({ useCustomFetch }: IProps) {
  return (
    <div>
      <PageComponent
        pageTitle="Schedulers"
        pageBody={<GetAllSchedulersDataTable useCustomFetch={useCustomFetch} />}
      />
    </div>
  );
}

export default GetAllSchedulerComponent;
