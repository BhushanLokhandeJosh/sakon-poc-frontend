import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { IServiceProvidersPayload } from "./OrganizationList/types";

export const initialServiceProviderValues: IServiceProvidersPayload = {
  name: "",
  url: "",
};

export const UPDATE_SERVICE_PROVIDER_MESSAGE =
  "Service Providers Updated Successfully...";

export const CREATE_SERVICE_PROVIDER_MESSAGE =
  "Service Providers Added Successfully...";

export const ERROR_MESSAGE = "Something Went Wrong...";

export const GET_ALL_SERVICE_PROVIDERS = "getServiceProviders";

export const ServiceProvidersColumns = (
  handleEditServiceProviders: Function
): GridColDef[] => {
  return [
    {
      field: "id",
      headerName: "Id",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Service Provider Name",
      width: 400,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "url",
      headerName: "Website URL",
      width: 700,
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
              <IconButton
                onClick={() => handleEditServiceProviders(params.row)}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
  ];
};
