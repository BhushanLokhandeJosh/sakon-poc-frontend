import React, { Component, ComponentType, ElementType, ReactNode } from "react";
import { Button } from "@mui/material";
import GetAllConfDataTable from "./GetAllConfDataTable";
import CustomTable from "../../../shared/CustomTable/CustomTable";
import SearchBox from "../../../shared/CustomTable/SearchBox";
import { Direction } from "react-toastify/dist/utils";
import PageComponent from "../../../shared/PageComponent/PageComponent";

interface IProps {
  useCustomFetch: any;
}

function GetAllConfigurationComponent({ useCustomFetch }: IProps) {
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

export default GetAllConfigurationComponent;
