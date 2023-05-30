import { Box, Typography } from "@mui/material";
import CustomTable from "../../../../shared/CustomTable/CustomTable";
import { getAllDownloadJobColumns } from "./constants";
import { useFetchAllJobs } from "../../jobs-hooks";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
import "../component/style/styles.css";

const StepComponent = () => {
  return (
    <Box>
      <PageComponent
        pageTitleClassName="page-title-style"
        pageTitle="Jobs"
        pageBody={
          <CustomTable
            isPaginationVisible={true}
            columnHeaders={getAllDownloadJobColumns}
            useCustomFetch={useFetchAllJobs}
          />
        }
      ></PageComponent>
    </Box>
  );
};

export default StepComponent;
