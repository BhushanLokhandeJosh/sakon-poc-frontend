import React, { useState } from "react";
import CustomPieChart from "../../../shared/Charts/CustomPieChart";
import {
  useFetchAdminData,
  useGetDepartments,
} from "../config-hooks";
import { Formik, Form } from "formik";
import { Box, Button, Grid } from "@mui/material";
import Select from "../../../shared/FormComponents/Select";

import CustomBarGraph from "../../../shared/Charts/CustomBarGraph";
import { useSelector } from "react-redux";

const Admin = () => {
    //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const selectDepartmentOptions: { label: string; value: string }[] = [];
  const selectFrequencyOptions: any[] = [
    { label: "daily", value: "daily" },
    { label: "weekly", value: "weekly" },
    { label: "monthly", value: "monthly" },
  ];
  const [filterData, setFilterData] = React.useState<any>({});
  const id = loggedInUser?.org_id;

  // This hook is to fetch all the Departments.
  const { data: departmentNames, isLoading, isError } = useGetDepartments(id);
console.log("deptt names",departmentNames);

  //This hook is used to fetch all Admin related data.
  const {
    data,
    isLoading: adminLoading,
    isError: adminError,
    refetch,
  } = useFetchAdminData({ filterData });

  const errorGraphData = data?.errorgraphdata;
  const donwnloadData = data?.downloaddata;
  const uploadData = data?.uploaddata;

  console.log("upload data", uploadData);

  if (isLoading || adminLoading) {
    return <>Loading...</>;
  }
  if (isError || adminError) {
    return <>Error</>;
  }

  departmentNames?.map((item: any) => {
    const obj = {
      label: item.name,
      value: item.id,
    };
    selectDepartmentOptions.push(obj);
  });

  const onSubmit = (values: any) => {
    setFilterData(values);
    refetch();
  };

  return (
    <>
      <Formik initialValues={{}} onSubmit={onSubmit}>
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
                  name="department"
                  placeholder="Select Department"
                  options={selectDepartmentOptions}
                  className="configuration-style"
                  menuPlacement="bottom"
                  maxMenuHeight={100}
                  isMulti={false}
                />
                {/* need to pass select frequency */}
              </Grid>
            </Grid>
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
        {uploadData && uploadData?.length > 0 ? (
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

        {donwnloadData && donwnloadData?.length > 0 ? (
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
        {errorGraphData && errorGraphData?.length > 0 ? (
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
        ) : (
          <Box>No job data available.</Box>
        )}
      </div>
    </>
  );
};

export default Admin;
