import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { IDepartmentPayload } from "./DepartmentListing/types";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export const UPDATE_DEPARTMENT_MESSAGE = "Department Updated Successfully...";

export const CREATE_DEPARTMENT_MESSAGE = "Department Added Successfully...";

export const ERROR_MESSAGE = "Something Went Wrong...";

export const GET_ALL_DEPARTMENT = "getAllDepartment";

export const initialDepartmentValues: IDepartmentPayload = {
  name: "",
  org: "",
};

export const DepartmentColumns = (
  handleEditDepartment: Function
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
      headerName: "Department Name",
      width: 300,
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
      width: 250,
      renderCell: (params: GridCellParams) => {
        return (
          <>
            <Tooltip title="Edit" placement="top">
              <IconButton onClick={() => handleEditDepartment(params.row)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
  ];
};
