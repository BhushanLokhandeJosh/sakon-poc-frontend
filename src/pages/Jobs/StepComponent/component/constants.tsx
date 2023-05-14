import { GridColDef } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
import ErrorOutlineTwoToneIcon from "@mui/icons-material/ErrorOutlineTwoTone";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";

const colors = ["red", "green", "blue", "orange"];

export const getAllDownloadJobColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Job Id",
    width: 150,
    headerAlign: "center",
    align: "center",
    
  },
  {
    field: "Scheduler_Name",
    headerName: "Scheduler Name",
    width: 270,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Config_Name",
    headerName: "Configuration Name",
    width: 270,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Dept_No",
    headerName: "Department Name",
    width: 270,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Status",
    headerName: "Status",
    width: 270,
    headerAlign: "center",
    align: "center",
    renderCell: (params: any) => {
      if (params.value === "Pending") {
        return <CircularProgress color="primary" size={24} />;
      } else if (params.value === "Completed") {
        return <CheckCircleOutlineTwoToneIcon color="success" />;
      } else {
        return <ErrorOutlineTwoToneIcon color="warning" />;
      }
    },
  },

  {
    field: "Triggered_At",
    headerName: "Triggered At",
    width: 270,
    headerAlign: "center",
    align: "center",
  },
];

export const getAllFileValidatorJobColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Job Id",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Scheduler_Name",
    headerName: "Scheduler Name",
    width: 270,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Config_Name",
    headerName: "Configuration Name",
    width: 270,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Dept_No",
    headerName: "Department Name",
    width: 270,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Status",
    headerName: "Status",
    width: 270,
    sortable: false,
    headerAlign: "center",
    align: "center",
    renderCell: (params: any) => {
      if (params.value === "Pending") {
        return <CircularProgress color="primary" size={24} />;
      } else if (params.value === "Completed") {
        return <CheckCircleOutlineTwoToneIcon color="success" />;
      } else {
        return <ErrorOutlineTwoToneIcon color="warning" />;
      }
    },
  },

  {
    field: "Triggered_At",
    headerName: "Triggered At",
    width: 270,
    headerAlign: "center",
    align: "center",
  },
];

export const getAllTemplateValidatorJobColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Job Id",
    width: 150,
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
    field: "Config_Name",
    headerName: "Configuration Name",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Dept_No",
    headerName: "Department Name",
    width: 250,
    headerAlign: "center",
    align: "center",
    renderCell: (params: any) => {
      return (
        <Box sx={{ color: `${colors[Math.round(Math.random() * 2)]}` }}>{params.value}</Box>
      );
    },
  },
  {
    field: "Status",
    headerName: "Status",
    width: 200,
    sortable: false,
    headerAlign: "center",
    align: "center",
    renderCell: (params: any) => {
      if (params.value === "Pending") {
        return <CircularProgress color="primary" size={24} />;
      } else if (params.value === "Completed") {
        return <CheckCircleOutlineTwoToneIcon color="success" />;
      } else {
        return <ErrorOutlineTwoToneIcon color="warning" />;
      }
    },
  },
  {
    field: "Triggered_At",
    headerName: "Triggered At",
    width: 270,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "variance",
    headerName: "Variance in %",
    width: 200,
    headerAlign: "center",
    align: "center",
    renderCell: (param: any) => {
      if (param.value < 5) {
        return (
          <Box sx={{ color: "darkgreen", fontWeight: "20px" }}>
            {param.value}
          </Box>
        );
      } else if (param.value > 5 && param.value <= 10) {
        return (
          <Box sx={{ color: "darkorange", fontWeight: "20px" }}>
            {param.value}
          </Box>
        );
      } else {
        return (
          <Box sx={{ color: "red", fontWeight: "20px" }}>
            {param.value}
          </Box>
        );
      }
    },
  },
];

export const getAllUploadJobColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Job Id",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Scheduler_Name",
    headerName: "Scheduler Name",
    width: 270,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Config_Name",
    headerName: "Configuration Name",
    width: 270,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Dept_No",
    headerName: "Department Name",
    width: 270,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Status",
    headerName: "Status",
    width: 270,
    sortable: false,
    headerAlign: "center",
    align: "center",
    renderCell: (params: any) => {
      if (params.value === "Pending") {
        return <CircularProgress color="primary" size={24} />;
      } else if (params.value === "Completed") {
        return <CheckCircleOutlineTwoToneIcon color="success" />;
      } else {
        return <ErrorOutlineTwoToneIcon color="warning" />;
      }
    },
  },

  {
    field: "Triggered_At",
    headerName: "Triggered At",
    width: 270,
    headerAlign: "center",
    align: "center",
  },
];
