import CustomPieChart from "../../../shared/Charts/CustomPieChart";
import { useGetOrganizations } from "../config-hooks";
import BarGraph from "../../../shared/Charts/CustomLineGraph";
import { Formik, Form } from "formik";
import { Button, Grid, InputLabel } from "@mui/material";
import Select from "../../../shared/FormComponents/Select";
const DashboardComponent = () => {
  const data1 = [
    { name: "Success", value: 400 },
    { name: "Failures", value: 300 },
  ];
  const data2 = [
    { name: "Success", value: 300 },
    { name: "Failures", value: 400 },
  ];

  // todo => call the hook to get download, upload, line graph data.

  const { data: organizationNames, isLoading, isError } = useGetOrganizations();

  if (isLoading) {
    return <>Loading...</>;
  }
  if (isError) {
    return <>Error</>;
  }

  const hanldleChangeOrganization = (e: any) => {
    console.log("selected value", e.target.value);
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const selectOptions: { label: string; value: string }[] = [];

  organizationNames?.map((item: any) => {
    const obj = {
      label: item.name,
      value: item.name,
    };
    selectOptions.push(obj);
    console.log(selectOptions);
  });

  return (
    <>
      <Formik initialValues={{ select: "" }} onSubmit={onSubmit}>
        <Form>
          <Grid
            item
            xs={5}
            sx={{ display: "flex", marginTop: "2rem", alignItems: "baseline" }}
          >
            <Grid xs={3}>
              <InputLabel sx={{ color: "black" }}>Organization</InputLabel>
            </Grid>
            <Grid xs={6}>
              <Select
                name="select"
                placeholder="Select Configuration"
                options={selectOptions}
                className="configuration-style"
                menuPlacement="bottom"
                maxMenuHeight={100}
                isMulti={false}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "capitalize" }}
          >
            Submit
          </Button>
        </Form>
      </Formik>
      {/* <label>Organization: </label>
      <select
        name="organization"
        id="organization"
        onChange={hanldleChangeOrganization}
      >
        {organizationNames?.map((organization: any) => (
          <option value={organization.name}>{organization.name}</option>
        ))}
      </select> */}

      <div style={{ display: "flex" }}>
        {/* <span
          style={{
            marginTop: "7%",
            position: "relative",
            left: "15%",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Uploads
        </span> */}

        <CustomPieChart
          width={600}
          height={450}
          cx={400}
          cy={250}
          outerRadius={150}
          data={data1}
          label="upload"
          Select
        />
        {/* <span
          style={{
            marginTop: "7%",
            position: "relative",
            left: "15%",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Downloads
        </span> */}

        <CustomPieChart
          width={600}
          height={450}
          cx={400}
          cy={250}
          outerRadius={150}
          data={data2}
          label={"download"}
        />
      </div>

      <div style={{ marginLeft: "15%" }}>
        {/* <span
          style={{ marginRight: "100%", fontSize: "16px", fontWeight: "bold" }}
        >
          Jobs
        </span> */}
        <BarGraph></BarGraph>
      </div>
    </>
  );
};

export default DashboardComponent;
