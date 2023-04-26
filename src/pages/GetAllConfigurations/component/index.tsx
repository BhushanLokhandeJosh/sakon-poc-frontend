import React from "react";
import { Button } from "@mui/material";
import GetAllConfDataTable from "./GetAllConfDataTable";
import CustomTable from "../../../shared/CustomTable/CustomTable";
import SearchBox from "../../../shared/SearchBox/SearchBox";

interface IProps {
  searchValue: string;
  setSearchValue: Function;
  data: any;
}

const GetAllConfigurationComponent = (props: IProps) => {
  const { searchValue, setSearchValue, data } = props;

  return (
    <div>
      {/* <div className="input-btn-container"> */}
      <Button variant="contained">Create Configuration</Button>
      {/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /> */}
      {/* </div> */}
      <GetAllConfDataTable
        data={data}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  );
};

export default GetAllConfigurationComponent;
