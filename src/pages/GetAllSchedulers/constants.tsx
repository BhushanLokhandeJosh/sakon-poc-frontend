import { GridColDef } from "@mui/x-data-grid";
import CustomColumnPopover from "../../shared/ColumnPopover/CustomColumnPopover";
import { Tooltip, TableCell } from "@mui/material";
import { getTimeFromNow } from "./helper";

export const getAllSchedulerColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Id",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "schedule_name",
    headerName: "Schedule Name",
    width: 300,

    headerAlign: "center",
    align: "center",
  },
  {
    field: "frequency",
    headerName: "Frequency",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "configuration",
    headerName: "Configuration",
    width: 300,
    sortable: false,
    headerAlign: "center",
    align: "center",
    renderCell: (params: any) => {
      const arr = params?.row.configuration;
      return <CustomColumnPopover arr={arr} />;
    },
  },
  {
    field: "created_at",
    headerName: "Created At",
    width: 300,
    sortable: false,
    headerAlign: "center",
    align: "center",
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
