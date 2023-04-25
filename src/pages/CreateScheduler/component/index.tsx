import React from "react";
import { Form, Formik } from "formik";
import "./styles/style.css";
import {
  Interval,
  configurationOptions,
  dayOfMonth,
  dayOfWeek,
  initialValue,
  minuteInterval,
  timeInterval,
  timeZones,
  validationSchema,
} from "../constant";
import FormikControl from "../../../shared/FormikContainer/formikControl";
import { Button, Grid } from "@mui/material";
import "./styles/style.css";
import CustomSelect from "../../../shared/FormikContainer/formikfields/CustomSelect";

const CreateSchedulerComponent = (props: any) => {
  const { onSubmit } = props;

  return (
    <div className="card-container">
      <h3 className="header-style">Frequency</h3>

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
          const handleChange = () => {
            console.log("In handle change");
            if (values.atWhatTime === "MIN" && values.timeDuration) {
              setFieldValue("timeDuration", "");
            } else if (values.atWhatTime === "HOUR" && values.minDuration) {
              setFieldValue("minDuration", "");
            }
          };

          return (
            <Form>
              <Grid container spacing={2} className="container-style">
                <Grid item xs={2}>
                  <span className="subheading-style">Scheduler Name</span>
                </Grid>
                <Grid item xs={8}>
                  <FormikControl
                    control="input"
                    type="text"
                    name="schedularName"
                    className="form-control-input"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} className="container-style">
                <Grid item xs={2}>
                  <span className="subheading-style">Configuration</span>
                </Grid>
                <Grid item xs={8}>
                  <FormikControl
                    control="multi-select"
                    name="configurations"
                    placeholder="Select Configuration"
                    component={CustomSelect}
                    options={configurationOptions}
                    className="configuration-style"
                    isMulti={true}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} className="container-style">
                <Grid item xs={2}>
                  <span className="subheading-style">Create Backup:</span>
                </Grid>
                <Grid item xs={8}>
                  <div className="card-style">
                    <FormikControl
                      control="select"
                      name="interval"
                      options={Interval}
                      className="form-control"
                      onClick={handleInterval}
                    />

                    {values.interval === "MONTHLY" ? (
                      <FormikControl
                        control="select"
                        label="day of month"
                        name="monthDay"
                        options={dayOfMonth()}
                        className="form-control"
                      />
                    ) : (
                      values.interval === "WEEKLY" && (
                        <>
                          <span className="month-style">on</span>
                          <FormikControl
                            control="multi-select"
                            name="weekDay"
                            placeholder="Select Days"
                            component={CustomSelect}
                            options={dayOfWeek}
                            className="form-control-multiselect"
                            isMulti={true}
                          />
                        </>
                      )
                    )}

                    {values.interval !== "" && (
                      <FormikControl
                        control="select"
                        name="atWhatTime"
                        options={timeInterval}
                        className="form-control"
                        onClick={handleChange}
                      />
                    )}

                    {values.atWhatTime === "MIN" ? (
                      <>
                        <FormikControl
                          control="select"
                          name="minDuration"
                          options={minuteInterval()}
                          className="form-control"
                        />
                        <span className="month-style">minutes</span>
                      </>
                    ) : (
                      values.atWhatTime === "HOUR" && (
                        <>
                          <FormikControl
                            control="time"
                            name="timeDuration"
                            className="form-control"
                            value="12:00"
                          />
                        </>
                      )
                    )}
                  </div>
                </Grid>
              </Grid>

              <Grid container spacing={2} className="container-style">
                <Grid item xs={2}>
                  <span className="subheading-style">TimeZones :</span>
                </Grid>
                <Grid item xs={8}>
                  <FormikControl
                    control="select"
                    name="timeZone"
                    options={timeZones}
                    className="form-control-timezone"
                  />
                </Grid>
              </Grid>

              <div className="button-submit">
                <Button variant="contained" color="secondary">
                  Back
                </Button>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => resetForm()}
                >
                  Reset
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateSchedulerComponent;
