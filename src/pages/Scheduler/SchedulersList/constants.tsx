import { GridColDef } from "@mui/x-data-grid";
import { Tooltip, TableCell } from "@mui/material";

import { getTimeFromNow } from "./helper";

import { IObjectWithAnyFields } from "../../../shared/types";
import CustomColumnPopover from "../../../shared/ColumnPopover/CustomColumnPopover";

export const SchedulerColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Id",
    width: 200,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "schedule_name",
    headerName: "Schedule Name",
    width: 300,

    headerAlign: "left",
    align: "left",
  },
  {
    field: "interval",
    headerName: "Frequency",
    width: 300,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "configuration",
    headerName: "Configuration",
    width: 300,
    sortable: false,
    headerAlign: "left",
    align: "left",
    renderCell: (params: IObjectWithAnyFields) => {
      return <CustomColumnPopover arr={params?.row.configuration} />;
    },
  },
  {
    field: "created_at",
    headerName: "Created At",
    width: 300,
    sortable: false,
    headerAlign: "left",
    align: "left",
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
