import { GridColDef } from "@mui/x-data-grid";

export const getAllConfigColumns: GridColDef[] = [
  { field: "id", headerName: "Id", width: 100 },
  { field: "email", headerName: "Email", width: 220 },
  { field: "carrierName", headerName: "Carrier Name", width: 220 },
  {
    field: "configurationName",
    headerName: "Configuration Name",
    width: 220,
  },
  {
    field: "department",
    headerName: "Department",
    width: 220,
  },
  {
    field: "schedulingStatus",
    headerName: "Scheduling Status",
    width: 220,
  },
];
