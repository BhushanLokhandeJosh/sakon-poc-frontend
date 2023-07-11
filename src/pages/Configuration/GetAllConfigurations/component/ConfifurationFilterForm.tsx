import { Grid, InputLabel } from "@mui/material";

import { useGetDepartments } from "../../config-hooks";

import Input from "../../../../shared/FormComponents/Input";
import Select from "../../../../shared/FormComponents/Select";
import { INPUT_TYPE, IObjectWithAnyFields } from "../../../../shared/types";
import { useSelector } from "react-redux";
import { useFetchDepartmentList } from "../../../User/user-hooks";

const ConfifurationFilterForm = (props: IObjectWithAnyFields) => {

  //@ts-ignore
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const empId = loggedInUser?.id;
  console.log("empId",empId);
  
  const { data, isLoading, isError } = useFetchDepartmentList({ emp_id: empId });

  const departmentData = data?.map((department: any) => ({
    label: department.name,
    value: department.id,
  }));

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
        <Input
          type={INPUT_TYPE.RADIO}
          name="schedulingStatus"
          value="scheduled"
        />
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
        <Input
          type={INPUT_TYPE.RADIO}
          name="schedulingStatus"
          value="not scheduled"
        />
        <InputLabel>Not Scheduled</InputLabel>
      </Grid>

      <Grid item xs={7}>
        <InputLabel>Department :</InputLabel>
      </Grid>
      <Grid item xs={7}>
        <Select
          options={departmentData}
          placeholder="Select One"
          isMulti={false}
          name="department"
        />
      </Grid>
    </Grid>
  );
};

export default ConfifurationFilterForm;
