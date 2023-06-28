import CustomPieChart from "../../../shared/Charts/CustomPieChart";
import { useGetOrganizations } from "../config-hooks";
import { Formik, Form } from "formik";
import { Box, Button, Grid, InputLabel } from "@mui/material";
import Select from "../../../shared/FormComponents/Select";
import { useFetchSuperAdminData } from "../config-hooks";
import { useEffect, useState } from "react";
import CustomBarGraph from "../../../shared/Charts/CustomBarGraph";
import Admin from "./Admin";
import User from "./User";

const SuperAdmin = () => {
  const selectOrganizationOptions: { label: string; value: string }[] = [];
  const selectFrequencyOptions: any[] = [
    { label: "daily", value: "daily" },
    { label: "weekly", value: "weekly" },
    { label: "monthly", value: "monthly" },
  ];
  const [filterData, setFilterData] = useState<any>({});

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
          <Grid sx={{ display: "flex", marginLeft: "5rem" }}>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                marginTop: "2rem",
                alignItems: "baseline",
              }}
            >
              {/* <Grid xs={3}>
                <InputLabel sx={{ color: "black" }}>Organization:</InputLabel>
              </Grid> */}
              <Grid xs={6}>
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
                marginTop: "2rem",
                alignItems: "baseline",
              }}
            >
              {/* <Grid xs={3}>
                <InputLabel sx={{ color: "black" }}>Frequncy:</InputLabel>
              </Grid> */}
              <Grid xs={6}>
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
                sx={{ textTransform: "capitalize", marginTop: "2rem" }}
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
                position: "relative",
                left: "15%",
                fontSize: "16px",
                fontWeight: "bold",
                color: "gray",
              }}
            >
              Uploads
            </Box>
            <CustomPieChart
              width={600}
              height={450}
              cx={400}
              cy={250}
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
              height={450}
              cx={400}
              cy={250}
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
      <div style={{ marginLeft: "15%" }}>
        {errorGraphData?.length > 0 && (
          <>
            <Box
              sx={{
                marginRight: "100%",
                fontSize: "16px",
                fontWeight: "bold",
                color: "gray",
                marginBottom: "2%",
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
