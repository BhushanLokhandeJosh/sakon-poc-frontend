import React,{ useState } from "react";
import CustomPieChart from "../../../shared/Charts/CustomPieChart";
import { useGetOrganizations } from "../config-hooks";
import { Formik, Form } from "formik";
import { Box, Button, Grid } from "@mui/material";
import Select from "../../../shared/FormComponents/Select";
import { useFetchSuperAdminData } from "../config-hooks";

import CustomBarGraph from "../../../shared/Charts/CustomBarGraph";

const SuperAdmin = () => {
  const selectOrganizationOptions: { label: string; value: string }[] = [];
  const selectFrequencyOptions: any[] = [
    { label: "daily", value: "daily" },
    { label: "weekly", value: "weekly" },
    { label: "monthly", value: "monthly" },
  ];
  const [filterData, setFilterData] = React.useState<any>({});

  //This hook use to fetch all organizations.
  const { data: organizationNames, isLoading, isError } = useGetOrganizations();

  //This hook use to fetch all superAdmin related data.
  const {
    data,
    isLoading: SuperAdminLoading,
    isError: SuperAdminError,
    refetch,
  } = useFetchSuperAdminData({ filterData });

  const errorGraphData = data?.errorgraphdata;
  const donwnloadData = data?.downloaddata;
  const uploadData = data?.uploaddata;

  console.log("errorGraphData", errorGraphData, "donwnloadData", donwnloadData,"uploadData", uploadData);
  

  if (isLoading || SuperAdminLoading) {
    return <>Loading...</>;
  }
  if (isError || SuperAdminError) {
    return <>Error</>;
  }

  organizationNames?.map((item: any) => {
    const obj = {
      label: item.name,
      value: item.id,
    };
    selectOrganizationOptions.push(obj);
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
                  name="organization"
                  placeholder="Select Organization"
                  options={selectOrganizationOptions}
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
             
            />
          </>
        ) : (
          <Box /* Placeholder or message when uploadData is not available */>
            Upload data is Not Available
          </Box>
        )}
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
        {errorGraphData && errorGraphData?.length > 0 && (
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

export default SuperAdmin;
