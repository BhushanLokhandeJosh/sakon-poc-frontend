import { GridColDef } from "@mui/x-data-grid";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ErrorOutlineTwoToneIcon from "@mui/icons-material/ErrorOutlineTwoTone";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import { Link } from "react-router-dom";

export const getAllDownloadJobColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Job Id",
    width: 150,
    sortable: false,
    headerAlign: "center",
    align: "center",
    renderCell: (param: any) => (
      <Link to={`jobs/${parseInt(param.id)}`}>{param.id}</Link>
    ),
  },
  {
    field: "Scheduler_Name",
    headerName: "Scheduler Name",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Config_Name",
    headerName: "Configuration Name",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Dept_No",
    headerName: "Department Name",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Triggered_At",
    headerName: "Triggered At",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Service",
    headerName: "Service",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Status",
    headerName: "Status",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: (params: any) => {
      if (params.value === "Pending") {
        return <AutorenewIcon color="primary" />;
      } else if (params.value === "Completed") {
        return <CheckCircleOutlineTwoToneIcon color="success" />;
      } else {
        return <ErrorOutlineTwoToneIcon color="warning" />;
      }
    },
  },
];

//downloads
export const getAllDownloads: GridColDef[] = [
  {
    field: "id",
    headerName: "Step Id",
    width: 100,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "step",
    headerName: "Step",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "triggered_at",
    headerName: "Triggered At",
    width: 180,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "attempts",
    headerName: "Attempts",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "timeout",
    headerName: "Timeout",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
];

//file validators
export const getAllFileValidators: GridColDef[] = [
  {
    field: "id",
    headerName: "Step Id",
    width: 100,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "step",
    headerName: "Step",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "triggered_at",
    headerName: "Triggered At",
    width: 180,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "attempts",
    headerName: "Attempts",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "timeout",
    headerName: "Timeout",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
];

//template validators
export const getAllTemplateValidators: GridColDef[] = [
  {
    field: "id",
    headerName: "Step Id",
    width: 100,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "step",
    headerName: "Step",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "triggered_at",
    headerName: "Triggered At",
    width: 180,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "attempts",
    headerName: "Attempts",
    width: 115,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "timeout",
    headerName: "Timeout",
    width: 115,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "variance",
    headerName: "Variance(%)",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
];
export const getAllUploads: GridColDef[] = [
  {
    field: "id",
    headerName: "Step Id",
    width: 100,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "step",
    headerName: "Step",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "triggered_at",
    headerName: "Triggered At",
    width: 180,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "attempts",
    headerName: "Attempts",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "timeout",
    headerName: "Timeout",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
];
