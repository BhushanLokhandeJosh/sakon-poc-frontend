import React, { Component, ComponentType, ElementType, ReactNode } from "react";
import { Button } from "@mui/material";
import GetAllConfDataTable from "./GetAllConfDataTable";
import CustomTable from "../../../shared/CustomTable/CustomTable";
import SearchBox from "../../../shared/SearchBox/SearchBox";
import { Direction } from "react-toastify/dist/utils";
import PageComponent from "../../../shared/PageComponent/PageComponent";

interface IProps {
  searchValue: string;
  setSearchValue: Function;
  data: any;
}

const GetAllConfigurationComponent = (props: IProps) => {
  const { searchValue, setSearchValue, data } = props;

  return (
    <div>
      <PageComponent
        pageTitle="Configurations"
        buttonLable="Create Configuration"
        pageBody={
          <GetAllConfDataTable
            data={data}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        }
      />
    </div>
  );
};

export default GetAllConfigurationComponent;
