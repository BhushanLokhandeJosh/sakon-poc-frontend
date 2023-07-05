import React,{ useState } from "react";
import CustomPieChart from "../../../shared/Charts/CustomPieChart";
import {
  useFetchUserData,
  
} from "../config-hooks";
import { Formik, Form } from "formik";
import { Box, Button, Grid, InputLabel } from "@mui/material";

import CustomBarGraph from "../../../shared/Charts/CustomBarGraph";
import Select from "../../../shared/FormComponents/Select";

const User = () => {
  const selectFrequencyOptions: any[] = [
    { label: "daily", value: "daily" },
    { label: "weekly", value: "weekly" },
    { label: "monthly", value: "monthly" },
  ];
  const [filterData, setFilterData] = React.useState<any>({});

  const { data, isLoading, isError, refetch } = useFetchUserData({
    filterData,
  });

  const errorGraphData = data?.errorgraphdata;
  const donwnloadData = data?.downloaddata;
  const uploadData = data?.uploaddata;

  if (isLoading) {
    return <>Loading...</>;
  }
  if (isError) {
    return <>Error</>;
  }

  const onSubmit = (values: any) => {
    console.log("admin values", values);
    setFilterData(values);
    refetch();
  };

  return (
    <>
      <Formik initialValues={{ }} onSubmit={onSubmit}>
        <Form>
          <Grid sx={{ display: "flex" }}>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                marginTop: "1rem",
                alignItems: "baseline",
              }}
            >
              <Grid xs={10}>
                <Select
                  name="frequency"
                  placeholder="Frequency"
                  // options={selectFrequencyOptions}
                  options={selectFrequencyOptions}
                  className="configuration-style"
                  menuPlacement="bottom"
                  maxMenuHeight={100}
                  isMulti={false}
                />  
              </Grid>
            </Grid>
            <Grid xs={-1}>
              <Button
                type="submit"
                variant="contained"
                sx={{ textTransform: "capitalize", marginTop: "1rem" }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
      <div style={{ display: "flex" }}>
        {/* for upload section */}
        {uploadData?.length > 0 ? (
          <>
            <Box
              sx={{
                marginTop: "7%",
                fontSize: "16px",
                fontWeight: "bold",
                color: "gray",
              }}
            >
              Uploads
            </Box>
            <CustomPieChart
               width={350}
               height={350}
               cx={190}
               cy={190}
               outerRadius={150}
              data={uploadData}
              // label="Uploads"
            />
          </>
        ) : (
          <Box /* Placeholder or message when uploadData is not available */>
            Upload data is Not Available
          </Box>
        )}
        {/* for download section */}
        {donwnloadData?.length > 0 ? (
          <>
            <Box
              sx={{
                marginTop: "7%",
                position: "relative",
                left: "15%",
                fontSize: "16px",
                fontWeight: "bold",
                color: "gray",
              }}
            >
              Downloads
            </Box>
            <CustomPieChart
              width={600}
              height={350}
              cx={400}
              cy={190}
              outerRadius={150}
              data={donwnloadData}
            />
          </>
        ) : (
          <Box /* Placeholder or message when uploadData is not available */>
            Download data is Not Available
          </Box>
        )}
      </div>
      <div style={{ marginLeft: "3%" }}>
        {errorGraphData?.length > 0 && (
          <>
            <Box
              sx={{
                marginRight: "100%",
                fontSize: "16px",
                fontWeight: "bold",
                color: "gray",
                position: "relative",
                right:"3%",
              }}
            >
              Jobs
            </Box>
            <CustomBarGraph width={1100} height={300} data={errorGraphData} />
          </>
        )}
      </div>
    </>
  );
};

export default User;
