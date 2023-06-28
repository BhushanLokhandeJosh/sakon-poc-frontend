import CustomPieChart from "../../../shared/Charts/CustomPieChart";
import {
  useFetchUserData,
  useGetDepartments,
  useGetOrganizations,
} from "../config-hooks";
import { Formik, Form } from "formik";
import { Box, Button, Grid, InputLabel } from "@mui/material";
import Select from "../../../shared/FormComponents/Select";
import { useFetchSuperAdminData } from "../config-hooks";
import { useEffect, useState } from "react";
import CustomBarGraph from "../../../shared/Charts/CustomBarGraph";

const User = () => {
  const selectFrequencyOptions: any[] = [
    { label: "daily", value: "daily" },
    { label: "weekly", value: "weekly" },
    { label: "monthly", value: "monthly" },
  ];
  const [filterData, setFilterData] = useState<any>({});

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
      <Formik initialValues={{ select: "" }} onSubmit={onSubmit}>
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

export default User;
