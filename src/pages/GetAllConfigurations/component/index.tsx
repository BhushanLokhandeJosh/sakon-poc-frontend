import React, { Component, ComponentType, ElementType, ReactNode } from "react";
import { Button } from "@mui/material";
import GetAllConfDataTable from "./GetAllConfDataTable";
import CustomTable from "../../../shared/CustomTable/CustomTable";
import SearchBox from "../../../shared/SearchBox/SearchBox";
import { Direction } from "react-toastify/dist/utils";
import PageComponent from "../../../shared/PageComponent/PageComponent";

interface IProps<T> {
  data: T[];
  searchValue: string;
  setSearchValue: Function;
}

function GetAllConfigurationComponent<T>(props: IProps<T>) {
  const { searchValue, setSearchValue, data } = props;

  return (
    <div>
      <PageComponent
        pageTitle="Configurations"
        buttonLabel="Create Configuration"
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
}

export default GetAllConfigurationComponent;
