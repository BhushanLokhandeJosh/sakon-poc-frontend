import { GridColDef } from "@mui/x-data-grid";

//downloads
export const DownloadsColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Step Id",
    width: 100,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "step",
    headerName: "Step",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "triggered_at",
    headerName: "Triggered At",
    width: 180,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "attempts",
    headerName: "Attempts",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "timeout",
    headerName: "Timeout",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
];

//file validators
export const FileValidatorColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Step Id",
    width: 100,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "step",
    headerName: "Step",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "triggered_at",
    headerName: "Triggered At",
    width: 180,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "attempts",
    headerName: "Attempts",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "timeout",
    headerName: "Timeout",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
];

//template validators
export const TemplateValidatorColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Step Id",
    width: 100,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "step",
    headerName: "Step",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "triggered_at",
    headerName: "Triggered At",
    width: 180,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "attempts",
    headerName: "Attempts",
    width: 115,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "timeout",
    headerName: "Timeout",
    width: 115,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "variance",
    headerName: "Variance(%)",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
];
export const UploadColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Step Id",
    width: 100,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "step",
    headerName: "Step",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "triggered_at",
    headerName: "Triggered At",
    width: 180,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "attempts",
    headerName: "Attempts",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "timeout",
    headerName: "Timeout",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
];
