import { GridColDef } from "@mui/x-data-grid";

export const getAllConfigColumns: GridColDef[] = [
  { field: "id", headerName: "Id", width: 100 },
  {
    field: "configurationName",
    headerName: "Configuration Name",
    width: 200,
    sortable: false,
  },
  {
    field: "department",
    headerName: "Department",
    width: 200,
  },
  { field: "carrierName", headerName: "Carrier Name", width: 220 },
  { field: "email", headerName: "Email", width: 220, sortable: false },

  {
    field: "schedulingStatus",
    headerName: "Scheduling Status",
    width: 200,
    sortable: false,
  },
];
