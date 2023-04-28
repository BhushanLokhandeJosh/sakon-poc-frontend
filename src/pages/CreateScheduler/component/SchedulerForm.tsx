import { Form, Formik } from "formik";
import React from "react";
import {
  Interval,
  configurationOptions,
  dayOfMonth,
  dayOfWeek,
  initialValue,
  timeZones,
  validationSchema,
} from "../constant";
import { Button, DialogActions, Grid } from "@mui/material";
import Input from "../../../shared/FormComponents/Input";
import MultiSelect from "../../../shared/FormComponents/MultiSelect";
import CustomSelect from "../../../shared/FormComponents/CustomSelect";
import Select from "../../../shared/FormComponents/Select";
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
        {({ values, setFieldValue, resetForm }) => {
          const handleInterval = () => {
            if (values.interval === "DAILY") {
              setFieldValue("monthDay", "");
              setFieldValue("weekDay", []);
            } else if (values.interval === "WEEKLY") {
              setFieldValue("monthDay", "");
            } else if (values.interval === "MONTHLY") {
              setFieldValue("weekDay", []);
            }
          };

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
                        <Select
                          name="monthDay"
                          options={dayOfMonth()}
                          className="form-control"
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
                  {/* <Select
                    name="timeZone"
                    options={timeZones}
                    className="form-control-timezone"
                    placeholder="Select Timezone"
                  /> */}

                  <MultiSelect
                    name="timeZone"
                    placeholder="Select Timezone"
                    component={CustomSelect}
                    options={timeZones}
                    className="form-control-timezone"
                    isMulti={false}
                    menuPlacement="top"
                    menuShouldScrollIntoView
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
