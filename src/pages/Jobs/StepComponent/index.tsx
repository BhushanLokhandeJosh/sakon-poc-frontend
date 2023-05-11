import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

import { a11yProps } from "./helpers";

import TabPanel from "./component/TabPanel";

const StepContainer = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
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
        Download
      </TabPanel>
      <TabPanel value={value} index={1}>
        File Validation
      </TabPanel>
      <TabPanel value={value} index={2}>
        Template Validation
      </TabPanel>
      <TabPanel value={value} index={3}>
        Upload
      </TabPanel>
    </Box>
  );
};

export default StepContainer;
