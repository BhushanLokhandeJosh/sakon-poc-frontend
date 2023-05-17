import { Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

//This getAllConfigColumns component is used to show all the column names in a table.
export const getAllConfigColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Id",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    // field: "configurationName",
    field: "name",
    headerName: "Configuration Name",
    width: 270,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "dept_name",
    headerName: "Department",
    width: 270,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "carrier_name",
    headerName: "Carrier Name",
    width: 270,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "email",
    headerName: "Email",
    width: 270,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "is_scheduled",
    headerName: "Scheduling Status",
    width: 270,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
];
