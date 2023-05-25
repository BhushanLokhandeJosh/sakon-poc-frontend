import { Box, Typography } from "@mui/material";
import CustomTable from "../../../../shared/CustomTable/CustomTable";
import { getAllDownloadJobColumns } from "./constants";
import { useFetchAllJobs } from "../../jobs-hooks";
import PageComponent from "../../../../shared/PageComponent/PageComponent";
// import "./style/styles.css";
import "../component/style/styles.css";

// const styles = {
//   root: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   title: {
//     marginTop: "15px",
//     fontWeight: "15px",
//   },
//   button: {
//     margin: "2% 4% 0% 0%",
//     padding: "10px",
//     height: "30px",
//   },
// };

const StepComponent = () => {
  return (
    // <Box
    //   sx={{
    //     width: "95%",
    //     marginTop: "2%",
    //   }}
    // >
    //   <Typography
    //     sx={{
    //       margin: "0% 0% 1% 1%",
    //       fontWeight: "bold",
    //       fontSize: "20px",
    //       borderBottom: 1,
    //       borderColor: "divider",
    //     }}
    //   >
    //     Jobs
    //   </Typography>
    <Box>
      <PageComponent
        // pageTitleClassName="title-style"
        pageTitle="Jobs"
        pageBody={
          <CustomTable
            // searchConfiguration={{
            //   isSearchBoxVisible: true,
            // }}
            // filterConfiguration={{ isFilterVisible: true }}
            isPaginationVisible={true}
            columnHeaders={getAllDownloadJobColumns}
            useCustomFetch={useFetchAllJobs}
          />
        }
      ></PageComponent>
    </Box>
    // </Box>
  );
};

export default StepComponent;
