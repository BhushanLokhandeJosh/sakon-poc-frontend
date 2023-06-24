import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import CustomColumnPopover from "../../shared/ColumnPopover/CustomColumnPopover";
import { IOrganizationPayload } from "./OrganizationList/types";

import { IObjectWithAnyFields } from "../../shared/types";

export const initialOrganizationValues: IOrganizationPayload = {
  id: 0,
  name: "",
  department_count: 0,
  service_providers: [],
};

export const UPDATE_ORGANIZATION_MESSAGE =
  "Organization Updated Successfully...";

export const CREATE_ORGANIZATION_MESSAGE = "Organization Added Successfully...";

export const ERROR_MESSAGE = "Something Went Wrong...";

export const GET_ALL_ORGANIZATION = "getAllOrganization";

export const GET_ALL_SERVICE_PROVIDERS = "getServiceProviders";

export const OrganizationColumns = (
  handleEditOrganization: Function
): GridColDef[] => {
  return [
    {
      field: "id",
      headerName: "Id",
      width: 175,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Organization Name",
      width: 350,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "department_count",
      headerName: "Dept. Count",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "service_providers",
      headerName: "Service Providers",
      width: 375,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params: IObjectWithAnyFields) => {
        return <CustomColumnPopover arr={params?.row.service_providers} />;
      },
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
              <IconButton onClick={() => handleEditOrganization(params.row)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
  ];
};
