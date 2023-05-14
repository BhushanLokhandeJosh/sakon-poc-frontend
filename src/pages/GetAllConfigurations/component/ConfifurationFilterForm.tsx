import { Field, Form, Formik, FormikValues } from "formik";
import React from "react";
import { Button, Grid, InputLabel } from "@mui/material";
import { useGetDepartments } from "../../../hooks/useFetchAllConfig";
import { ConfigFilterFormInitialValues } from "../types";
import Input from "../../../shared/FormComponents/Input";
import Select from "../../../shared/FormComponents/Select";

interface FilterFormProps {
  initialValues: ConfigFilterFormInitialValues;
  handleSubmit: (values: ConfigFilterFormInitialValues) => void;
}

function ConfifurationFilterForm(props: any) {
  console.log(props);
  const { data, isLoading, isError } = useGetDepartments();
  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error...</>;
  }

  return (
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
  );
}

export default ConfifurationFilterForm;
