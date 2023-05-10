import { Field, Form, Formik, FormikValues } from "formik";
import React from "react";
import MultiSelect from "../../../shared/FormComponents/MultiSelect";
import CustomSelect from "../../../shared/FormComponents/CustomSelect";
import { Button, Grid, InputLabel } from "@mui/material";
import { useGetDepartments } from "../../../hooks/useFetchAllConfig";
import { ConfigFilterFormInitialValues } from "../types";
import Input from "../../../shared/FormComponents/Input";
import Select from "../../../shared/FormComponents/Select";

interface FilterFormProps {
  initialValues: ConfigFilterFormInitialValues;
  handleSubmit: (values: ConfigFilterFormInitialValues) => void;
}

function FilterForm(props: any) {
  console.log(props);
  const { data, isLoading, isError } = useGetDepartments();
  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error...</>;
  }

  return (
    //   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    // <Grid item xs={6}>
    //   <Item>1</Item>
    // </Grid>
    // <Grid item xs={6}>
    //   <Item>2</Item>
    // </Grid>
    // </Grid>
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <InputLabel>Scheduling Status :</InputLabel>
        </Grid>

        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Input type="radio" name="schedulingStatus" value="scheduled" />
          <InputLabel>Scheduled</InputLabel>
        </Grid>

        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Input type="radio" name="schedulingStatus" value="not scheduled" />
          <InputLabel>Not Scheduled</InputLabel>
        </Grid>

        <Grid item xs={7}>
          <InputLabel>Department :</InputLabel>
        </Grid>
        <Grid item xs={7}>
          <Select
            options={data}
            placeholder="Select One"
            isMulti={false}
            name="department"
          />
        </Grid>
      </Grid>

      {/* <div>
        <div className="scheduling-container">
          <div>
            <label htmlFor="schedulingStatus">Scheduling Status : </label>
          </div>
          <div className="status-container">
            <label>
              <Input
                type="radio"
                name="schedulingStatus"
                value="scheduled"
              ></Input>
              Scheduled
            </label>
          </div>
          <div>
            <label>
              <Input
                type="radio"
                name="schedulingStatus"
                value="not scheduled"
              ></Input>
              Not Scheduled
            </label>
          </div>
        </div>
      </div> */}

      {/* <div className="department-container">
        <div>
          <label htmlFor="department"> Department :</label>
        </div>
        <div className="select-box-container">
          <MultiSelect
            options={data}
            placeholder="Select One"
            component={CustomSelect}
            isMulti={false}
            name="department"
          />
        </div>
      </div> */}

      {/* <div className="reset-submit">
        <Button type="reset" color="error" variant="contained">
          Reset
        </Button>
        <Button type="submit" variant="contained">
          Apply
        </Button>
      </div> */}
    </>
  );
}

export default FilterForm;
