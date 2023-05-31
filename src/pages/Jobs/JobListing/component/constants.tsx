import { GridColDef } from "@mui/x-data-grid";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ErrorOutlineTwoToneIcon from "@mui/icons-material/ErrorOutlineTwoTone";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import { Link } from "react-router-dom";

export const DownloadJobColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Job Id",
    width: 150,
    sortable: false,
    headerAlign: "center",
    align: "center",
    renderCell: (param: any) => (
      <Link to={`job-details/${parseInt(param.id)}`}>{param.id}</Link>
    ),
  },
  {
    field: "scheduler_name",
    headerName: "Scheduler Name",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "configuration_name",
    headerName: "Configuration Name",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "department_no",
    headerName: "Department Name",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "triggered_at",
    headerName: "Triggered At",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "service",
    headerName: "Service",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "status",
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
