
import { Box, Typography } from "@mui/material";
import CustomTable from "../../../../shared/CustomTable/CustomTable";
import { getAllJobsColumns } from "./constants";
import { useFetchAllJobs } from "../../jobs-hooks";

const StepComponent = () => {
  return (
    <Box
      sx={{
        width: "95%",
        marginTop: "2%",
      }}
    >
      <Typography
        sx={{
          margin: "0% 0% 1% 1%",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Jobs
      </Typography>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <CustomTable
          isFilterVisible={false}
          columnHeaders={getAllJobsColumns}
          useCustomFetch={useFetchAllJobs}
        />
      </Box>
    </Box>
  );
};

export default StepComponent;
