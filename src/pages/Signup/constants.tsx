import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import CustomColumnPopover from "../../shared/ColumnPopover/CustomColumnPopover";
import { ISignupPayload } from "./SignupList/types";

import { IObjectWithAnyFields } from "../../shared/types";

export const initialSignUpUserValues: ISignupPayload = {
  email: "",
  organization: "",
  designation: "",
  department_count: 0,
  service_providers: [],
};

export const UPDATE_ORGANIZATION_MESSAGE =
  "Organization Updated Successfully...";

export const CREATE_ORGANIZATION_MESSAGE = "Organization Added Successfully...";

export const ERROR_MESSAGE = "Something Went Wrong...";

export const GET_ALL_SIGNUP = "getAllSignupUser";

export const GET_ALL_SERVICE_PROVIDERS = "getServiceProviders";

export const USER_ENQUIRY = "User Enquiry";

export const SignUpUserColumns = (handleEditSignup: Function): GridColDef[] => {
  return [
    {
      field: "id",
      headerName: "Id",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "organization",
      headerName: "Organization Name",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "designation",
      headerName: "Designation",
      width: 350,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "department_count",
      headerName: "Dept. Count",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "service_providers",
      headerName: "Service Providers",
      width: 250,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params: IObjectWithAnyFields) => (
        <CustomColumnPopover arr={params?.row.service_providers} />
      ),
    },
    {
      field: "edit",
      headerName: "Edit",
      description: "Edit actions column.",
      sortable: false,
      headerAlign: "center",
      align: "center",
      width: 200,
      renderCell: (params: GridCellParams) => (
        <Tooltip title="Edit" placement="top">
          <IconButton onClick={() => handleEditSignup(params.row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      ),
    },
  ];
};
