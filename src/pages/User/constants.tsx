import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { IUserPayload } from "./UserListing/types";
import { IconButton, Tooltip } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

export const initialUserValues: IUserPayload = {
  name: "",
  email: "",
  role: "",
  department: "",
  org: "",
};

export const UPDATE_USER_MESSAGE =
  "Organization Updated Successfully...";

export const CREATE_USER_MESSAGE = "Organization Added Successfully...";

export const ERROR_MESSAGE = "Something Went Wrong..."

export const GET_ALL_USER = "getAllUser";

export const UserColumns = (handleEditUser: Function): GridColDef[] => {
  return [
    {
      field: "id",
      headerName: "Id",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "UserName",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "department",
      headerName: "Department",
      width: 200,
      sortable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "org",
      headerName: "Organization",
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
      headerAlign: "center",
      align: "center",
      width: 200,
      renderCell: (params: GridCellParams) => {
        return (
          <>
            <Tooltip title="Edit" placement="top">
              <IconButton onClick={() => handleEditUser(params.row)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
  ];
};
