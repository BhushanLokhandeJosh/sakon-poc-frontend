import { Grid, InputLabel } from "@mui/material";

import Input from "../../../../shared/FormComponents/Input";
import Select from "../../../../shared/FormComponents/Select";
import Time from "../../../../shared/FormComponents/Time";

import {
  Interval,
  configurationOptions,
  dayOfMonth,
  dayOfWeek,
  timeZones,
} from "../helpers";
import { IFormikProps } from "../../../../shared/types";
import { ISchedulerProps } from "../types";

interface ISchedulerFormProps {
  formik: IFormikProps<ISchedulerProps>;
}

const SchedulerForm = (props: ISchedulerFormProps) => {
  const { interval } = props.formik.values;

  return (
    <Grid
      container
      rowSpacing={4}
      columnSpacing={{ xs: 2, sm: 2, md: 2 }}
      className="grid-align-style"
    >
      <Grid item lg={3} md={4} sm={5} xs={12}>
        <InputLabel sx={{ color: "black" }} classes={{}}>
          Scheduler Name
        </InputLabel>
      </Grid>
      <Grid item lg={9} md={8} sm={8} xs={12}>
        <Input
          type="text"
          name="schedularName"
          className="form-control-input"
          placeholder="Schedular Name"
        />
      </Grid>

      <Grid item lg={3} md={4} sm={5} xs={12}>
        <InputLabel sx={{ color: "black" }}>Configuration</InputLabel>
      </Grid>
      <Grid item lg={9} md={8} sm={8} xs={12}>
        <Select
          name="configurations"
          placeholder="Select Configuration"
          options={configurationOptions}
          className="configuration-style"
          isMulti={true}
          menuPlacement="bottom"
          maxMenuHeight={100}
        />
      </Grid>

      <Grid item lg={3} md={4} sm={5} xs={12}>
        <InputLabel sx={{ color: "black" }}>Frequency</InputLabel>
      </Grid>
      <Grid item lg={9} md={8} sm={8} xs={12}>
        <div className="card-style">
          <Select
            name="interval"
            placeholder="Interval"
            options={Interval}
            className="form-control"
            isMulti={false}
          />
          {interval === "MONTHLY" ? (
            <>
              <InputLabel sx={{ color: "black", padding: "0% 2%" }}>
                Day of month
              </InputLabel>

              <Select
                name="monthDay"
                placeholder="Select Date"
                options={dayOfMonth()}
                className="form-control-monthly"
                menuPlacement="bottom"
                maxMenuHeight={100}
                isMulti={false}
              />
            </>
          ) : (
            interval === "WEEKLY" && (
              <>
                <InputLabel sx={{ color: "black", padding: "0% 2%" }}>
                  on
                </InputLabel>
                <Select
                  name="weekDay"
                  placeholder="Select Day"
                  options={dayOfWeek}
                  isMulti
                  menuPlacement="bottom"
                  maxMenuHeight={100}
                  className="form-control-weekly"
                />
              </>
            )
          )}
          <InputLabel sx={{ color: "black", padding: "0% 2%" }}>at</InputLabel>

          <Time
            name="timeDuration"
            className="form-control-time"
            value="12:00"
          />
        </div>
      </Grid>

      <Grid item lg={3} md={4} sm={5} xs={12}>
        <InputLabel sx={{ color: "black" }}>Timezone</InputLabel>
      </Grid>
      <Grid item lg={9} md={8} sm={8} xs={12}>
        <Select
          name="timeZone"
          placeholder="Select Timezone"
          options={timeZones}
          className="form-control-timezone"
          isMulti={false}
          menuPlacement="bottom"
          maxMenuHeight={70}
          menuShouldScrollIntoView={true}
        />
      </Grid>
    </Grid>
  );
};

export default SchedulerForm;
