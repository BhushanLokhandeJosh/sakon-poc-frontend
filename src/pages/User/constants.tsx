import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { ADMIN, IUserPayload, SUPER_ADMIN } from "./UserListing/types";
import { IconButton, Tooltip } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

import { useSelector } from "react-redux";
import CustomColumnPopover from "../../shared/ColumnPopover/CustomColumnPopover";
import { IObjectWithAnyFields } from "../../shared/types";

export const initialUserValues: IUserPayload = {
  name: "",
  email: "",
  Department: [],
  org: 0,
};

export const UPDATE_USER_MESSAGE = "Organization Updated Successfully...";

export const CREATE_USER_MESSAGE = "Organization Added Successfully...";

export const ERROR_MESSAGE = "Something Went Wrong...";

export const GET_ALL_USER = "getAllUser";

export const GET_ALL_ORG = "getAllOrganization";

export const GET_ORG_DEPT = "getOrganizationDepartment";

export const UserColumns = (handleEditUser: Function): GridColDef[] => {
  //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);

  let columns: any = [
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
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 400,
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

  if (loggedInUser?.type === SUPER_ADMIN) {
    columns.splice(3, 0, {
      field: "org",
      headerName: "Organization",
      width: 300,
      sortable: false,
      headerAlign: "center",
      align: "center",
    });
  } else if (loggedInUser?.type === ADMIN) {
    columns.splice(3, 0, {
      field: "Department",
      headerName: "Department",
      width: 300,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params: IObjectWithAnyFields) => {
        return <CustomColumnPopover arr={params?.row.Department} />;
      },
    });
  }

  return columns;
};
