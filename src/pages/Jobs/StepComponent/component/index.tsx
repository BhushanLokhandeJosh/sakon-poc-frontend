import React from "react";
import TabPanel from "./TabPanel";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { a11yProps } from "../helpers";
import CustomTable from "../../../../shared/CustomTable/CustomTable";
import { getAllDownloadJobColumns, getAllFileValidatorJobColumns, getAllTemplateValidatorJobColumns, getAllUploadJobColumns } from "./constants";
import { useFetchAllDownloadJobs, useFetchAllFileValidatorJobs, useFetchAllTemplateValidatorJobs, useFetchAllUploadJobs } from "../../jobs-hooks";

interface IStepComponentProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StepComponent = (props: IStepComponentProps) => {
  const { value, handleChange } = props;
  return (
    <Box
      sx={{
        width: "95%",
        marginTop: "2%",
      }}
    >
      <Typography
        sx={{ margin: "0% 0% 1% 1%", fontWeight: "bold", fontSize: "20px" }}
      >
        Jobs
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered={true}
        >
          <Tab
            sx={{ color: "black", fontSize: "15px" }}
            label="Download"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ color: "black" }}
            label="File Validation"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ color: "black" }}
            label="Template Validation"
            {...a11yProps(2)}
          />
          <Tab sx={{ color: "black" }} label="Upload" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CustomTable
          isFilterVisible={false}
          columnHeaders={getAllDownloadJobColumns}
          useCustomFetch={useFetchAllDownloadJobs}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomTable
          isFilterVisible={false}
          columnHeaders={getAllFileValidatorJobColumns}
          useCustomFetch={useFetchAllFileValidatorJobs}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CustomTable
          isFilterVisible={false}
          columnHeaders={getAllTemplateValidatorJobColumns}
          useCustomFetch={useFetchAllTemplateValidatorJobs}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CustomTable
          isFilterVisible={false}
          columnHeaders={getAllUploadJobColumns}
          useCustomFetch={useFetchAllUploadJobs}
        />
      </TabPanel>
    </Box>
  );
};

export default StepComponent;
