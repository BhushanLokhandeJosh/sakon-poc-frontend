import React from "react";
import { Button } from "@mui/material";
import DataTable from "./DataTable";

interface IProps {
  searchValue: string;
  setSearchValue: Function;
  data: any;
}

const GetAllConfigurationComponent = (props: IProps) => {
  const { searchValue, setSearchValue, data } = props;

  return (
    <div>
      <div className="input-btn-container">
        <Button variant="contained">Create Configuration</Button>
        <input
          className="search"
          type="text"
          value={searchValue}
          placeholder="Search..."
          onChange={(e: any) => setSearchValue(e.target.value)}
        />
      </div>
      <DataTable data={data} />
    </div>
  );
};

export default GetAllConfigurationComponent;
