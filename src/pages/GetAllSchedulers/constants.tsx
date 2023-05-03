import { GridColDef } from "@mui/x-data-grid";
import CustomColumnPopover from "../../shared/ColumnPopover/CustomColumnPopover";
export const getAllSchedulerColumns: GridColDef[] = [
  { field: "id", headerName: "Id", width: 150 },
  {
    field: "schedule_name",
    headerName: "Schedule Name",
    width: 250,
    // sortable: false,
  },
  {
    field: "frequency",
    headerName: "Frequency",
    width: 250,
  },
  {
    field: "configuration",
    headerName: "Configuration",
    width: 300,
    sortable: false,
    renderCell: (params: any) => {
      const arr = params?.row.configuration;
      return <CustomColumnPopover arr={arr} />;
    },
  },
  {
    field: "created_at",
    headerName: "Created At",
    width: 250,
    sortable: false,
  },
];
