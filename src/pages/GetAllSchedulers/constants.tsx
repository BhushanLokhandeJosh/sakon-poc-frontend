import { GridColDef } from "@mui/x-data-grid";
import CustomColumnPopover from "../../shared/ColumnPopover/CustomColumnPopover";
import { Tooltip, TableCell } from "@mui/material";
import { getTimeFromNow } from "../../shared/utils";

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
    width: 250,
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
    renderCell: (params) => {
      const currentTime = params?.row.created_at;
      const date = new Date(params?.value);

      return (
        <Tooltip
          title={date.toLocaleString("en-us", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
          placement="top"
          arrow
        >
          <TableCell>{getTimeFromNow(currentTime)}</TableCell>
        </Tooltip>
      );
    },
  },
];
