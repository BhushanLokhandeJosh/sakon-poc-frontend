import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getAllConfigColumns } from "../constants";
import "./styles/style.css";

interface IProps {
  data: any;
}

export default function DataTable(props: IProps) {
  const { data } = props;

  return (
    <div style={{ height: 600, width: "98%" }}>
      <DataGrid
        disableColumnMenu //used to disabling column menu's which is used to sort a column as per requirment.
        disableRowSelectionOnClick //Used to Remove statement: whenever we select rows it shows selected rows statement on UI.
        rows={data}
        columns={getAllConfigColumns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
      />
    </div>
  );
}
