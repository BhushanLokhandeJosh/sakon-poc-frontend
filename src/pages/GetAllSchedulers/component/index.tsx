import React from "react";
import PageComponent from "../../../shared/PageComponent/PageComponent";
import GetAllSchedulersDataTable from "./GetAllSchedulersDataTable";

interface IProps {
  searchValue: string;
  setSearchValue: Function;
  data: any;
}
const GetAllSchedulerComponent = (props: IProps) => {
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
};

export default GetAllSchedulerComponent;
