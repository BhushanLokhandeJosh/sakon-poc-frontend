import { GridColDef } from "@mui/x-data-grid";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ErrorOutlineTwoToneIcon from "@mui/icons-material/ErrorOutlineTwoTone";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";

export const getAllJobsColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Job Id",
    width: 150,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Scheduler_Name",
    headerName: "Scheduler Name",
    width: 300,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Configuration_Name",
    headerName: "Configuration Name",
    width: 300,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Department_Name",
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
    sortable: false,
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
