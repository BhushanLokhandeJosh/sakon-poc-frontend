import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { Tooltip, TableCell } from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import CustomColumnPopover from "../../../shared/ColumnPopover/CustomColumnPopover";
import { getTimeFromNow } from "./helper";

import { IObjectWithAnyFields } from "../../../shared/types";

export const SchedulerColumns = (
  handleEditScheduler: Function
): GridColDef[] => {
  return [
    {
      field: "id",
      headerName: "Id",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "schedule_name",
      headerName: "Schedule Name",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "interval",
      headerName: "Frequency",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "configuration",
      headerName: "Configuration",
      width: 200,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params: IObjectWithAnyFields) => {
        return <CustomColumnPopover arr={params?.row.configuration} />;
      },
    },
    {
      field: "created_at",
      headerName: "Created At",
      width: 350,
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
    {
      field: "edit",
      headerName: "Edit",
      description: "Edit actions column.",
      sortable: false,
      headerAlign: "center",
      align: "center",
      width: 100,
      renderCell: (params: GridCellParams) => {
        return (
          <>
            <Tooltip title="Edit" placement="top">
              <IconButton onClick={() => handleEditScheduler(params.row)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
  ];
};
