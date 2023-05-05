import React from "react";
import PageComponent from "../../../shared/PageComponent/PageComponent";
import GetAllSchedulersDataTable from "./GetAllSchedulersDataTable";

interface IProps<T> {
  data: T[];
  searchValue: string;
  setSearchValue: Function;
}
function GetAllSchedulerComponent<T>(props: IProps<T>) {
  const { searchValue, setSearchValue, data } = props;

  const initialValues = {};
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <PageComponent
        pageTitle="Schedulers"
        // buttonLable={}
        pageBody={
          <GetAllSchedulersDataTable
            data={data}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            initialValues={initialValues}
            handleSubmit={handleSubmit}
          />
        }
      />
    </div>
  );
}

export default GetAllSchedulerComponent;
