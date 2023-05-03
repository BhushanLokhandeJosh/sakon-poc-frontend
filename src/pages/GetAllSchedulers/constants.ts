import { GridColDef } from "@mui/x-data-grid";

export const getAllSchedulerColumns: GridColDef[] = [
  { field: "id", headerName: "Id", width: 150 },
  {
    field: "schedule_name",
    headerName: "Schedule Name",
    width: 250,
    // sortable: false,
  },
  {
    field: "day_of_week",
    headerName: "Day of Week",
    width: 250,
  },
  {
    field: "day_of_month",
    headerName: "Day of Month",
    width: 300,
    sortable: false,
  },
  {
    field: "created_at",
    headerName: "Created At",
    width: 250,
    sortable: false,
  },
];
