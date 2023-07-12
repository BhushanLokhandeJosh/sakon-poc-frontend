import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import CustomColumnPopover from "../../shared/ColumnPopover/CustomColumnPopover";
import { IOrganizationPayload } from "./OrganizationList/types";

import { IObjectWithAnyFields } from "../../shared/types";

export const initialOrganizationValues: IOrganizationPayload = {
  // id: 0,
  name: "",
  department_count: 0,
  service_providers: [],
};

export const UPDATE_ORGANIZATION_MESSAGE =
  "Organization Updated Successfully...";

export const CREATE_ORGANIZATION_MESSAGE = "Organization Added Successfully...";

export const ERROR_MESSAGE = "Something Went Wrong..."

export const GET_ALL_ORGANIZATION = "getAllOrganization";

export const GET_ALL_SERVICE_PROVIDERS = "getServiceProviders";

export const organizationColumns = (
  handleEditOrganization: Function
): GridColDef[] => {
  return [
    {
      field: "id",
      headerName: "Id",
      flex:0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Organization Name",
      flex:1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "department_count",
      headerName: "Dept. Count",
      flex:1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "service_providers",
      headerName: "Service Providers",
      flex:1,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params: IObjectWithAnyFields) => (
        <CustomColumnPopover arr={params?.row.service_providers} />
      )
    },
    {
      field: "edit",
      headerName: "Edit",
      description: "Edit actions column.",
      sortable: false,
      headerAlign: "center",
      align: "center",
      flex:0.5,
      renderCell: (params: GridCellParams) => (
            <Tooltip title="Edit" placement="top">
              <IconButton onClick={() => handleEditOrganization(params.row)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
        )
    },
  ];
};
