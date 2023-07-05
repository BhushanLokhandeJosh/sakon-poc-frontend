import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

//This ConfigurationListColumns component is used to show all the column names in a table.
export const ConfigurationListColumns = (
  handleEditConfiguration: Function
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
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "carrierName",
      headerName: "Carrier Name",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      sortable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "schedulingStatus",
      headerName: "Scheduling Status",
      width: 200,
      sortable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "edit",
      headerName: "Edit",
      description: "Edit actions column.",
      sortable: false,
      width: 100,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridCellParams) => {
        console.log(params, "conf");

        return (
          <Tooltip title="Edit" placement="top">
            <IconButton onClick={() => handleEditConfiguration(params.row)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        );
      },
    },
  ];
};
