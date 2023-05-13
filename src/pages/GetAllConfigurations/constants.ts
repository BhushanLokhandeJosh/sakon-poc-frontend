import { GridColDef } from "@mui/x-data-grid";

export const getAllConfigColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Id",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "configurationName",
    headerName: "Configuration Name",
    width: 270,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "department",
    headerName: "Department",
    width: 270,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "carrierName",
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
    field: "schedulingStatus",
    headerName: "Scheduling Status",
    width: 270,
    sortable: false,
    headerAlign: "center",
    align: "center",
    renderCell: (params: any) => {
      return params.value ? "scheduled" : "not scheduled";
    },
  },
];
