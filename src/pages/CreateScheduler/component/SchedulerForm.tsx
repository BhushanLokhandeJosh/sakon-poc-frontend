import { Form, Formik } from "formik";
import { Button, DialogActions, Grid } from "@mui/material";

import {
  Interval,
  configurationOptions,
  dayOfMonth,
  dayOfWeek,
  initialValue,
  timeZones,
  validationSchema,
} from "../helpers";

import Input from "../../../shared/FormComponents/Input";
import MultiSelect from "../../../shared/FormComponents/MultiSelect";
import CustomSelect from "../../../shared/FormComponents/CustomSelect";
import Time from "../../../shared/FormComponents/Time";

const SchedulerForm = (props: any) => {
  const { onSubmit, toggleModal } = props;
  return (
    <div className="form">
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values }) => {
          return (
            <Form>
              <Grid
                container
                rowSpacing={4}
                columnSpacing={{ xs: 4, sm: 4, md: 4 }}
              >
                <Grid item xs={3}>
                  <span className="scheduler-style">Scheduler Name</span>
                </Grid>
                <Grid item xs={9}>
                  <Input
                    type="text"
                    name="schedularName"
                    className="form-control-input"
                    placeholder="Schedular Name"
                  />
                </Grid>

                <Grid item xs={3}>
                  <span className="subheading-style">Configuration</span>
                </Grid>
                <Grid item xs={9}>
                  <MultiSelect
                    name="configurations"
                    placeholder="Select Configuration"
                    component={CustomSelect}
                    options={configurationOptions}
                    className="configuration-style"
                    isMulti={true}
                    menuPlacement="bottom"
                    maxMenuHeight={100}
                  />
                </Grid>
                <Grid item xs={3}>
                  <span className="subheading-styling">Frequency</span>
                </Grid>
                <Grid item xs={9}>
                  <div className="card-style">
                    <MultiSelect
                      name="interval"
                      placeholder="Interval"
                      component={CustomSelect}
                      options={Interval}
                      className="form-control"
                      isMulti={false}
                    />
                    {values.interval === "MONTHLY" ? (
                      <>
                        <span className="month-style">day of month</span>
                        <MultiSelect
                          name="monthDay"
                          component={CustomSelect}
                          options={dayOfMonth()}
                          className="form-control-monthdays"
                          menuPlacement="bottom"
                          maxMenuHeight={100}
                          isMulti={false}
                        />
                      </>
                    ) : (
                      values.interval === "WEEKLY" && (
                        <>
                          <span className="month-style">on</span>
                          <MultiSelect
                            name="weekDay"
                            placeholder="Select Days"
                            component={CustomSelect}
                            options={dayOfWeek}
                            isMulti
                            menuPlacement="bottom"
                            maxMenuHeight={100}
                            className="form-control-weekly"
                          />
                        </>
                      )
                    )}
                    <span className="month-style">at</span>
                    <Time
                      name="timeDuration"
                      className="form-control-time"
                      value="12:00"
                    />
                  </div>
                </Grid>

                <Grid item xs={3}>
                  <span className="subheading-style">TimeZone</span>
                </Grid>
                <Grid item xs={9}>
                  <MultiSelect
                    name="timeZone"
                    placeholder="Select Timezone"
                    component={CustomSelect}
                    options={timeZones}
                    className="form-control-timezone"
                    isMulti={false}
                    menuPlacement="bottom"
                    maxMenuHeight={100}
                  />
                </Grid>

                <Grid item xs={11}>
                  <DialogActions>
                    <div className="button-container">
                      <button
                        type="reset"
                        className="cancel-button"
                        onClick={toggleModal}
                      >
                        CANCEL
                      </button>
                      <Button type="submit" variant="contained">
                        Submit
                      </Button>
                    </div>
                  </DialogActions>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SchedulerForm;
