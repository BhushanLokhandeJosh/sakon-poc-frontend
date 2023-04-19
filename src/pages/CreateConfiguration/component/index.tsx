import React from "react";
import { Form, Formik } from "formik";
import FormikControl from "../../../shared/FormikContainer/formikControl";
import "./styles/style.css";
import { InitialValuesProps } from "../constants";
import { Box, Button, Grid } from "@mui/material";

interface IProps {
  initialValues: InitialValuesProps;
  validationSchema: any;
  onSubmit: (values: InitialValuesProps) => void;
}

const CreateConfigurationComponent = (props: IProps) => {
  const { initialValues, validationSchema, onSubmit } = props;

  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formikProps) => {
          return (
            <Box sx={{ width: "100%" }}>
              <Form>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 1, md: 1 }}

                >
                  <Grid item xs={6}>
                    <div className="form-group">
                      <FormikControl
                        control="input"
                        type="text"
                        label="Email"
                        name="email"
                        className="form-field"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="form-group">
                      <FormikControl
                        control="input"
                        type="password"
                        label="Password"
                        name="password"
                        className="form-field"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="form-group">
                      <FormikControl
                        control="input"
                        type="text"
                        label="Carrier Name"
                        name="carrierName"
                        className="form-field"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="form-group">
                      <FormikControl
                        control="input"
                        type="text"
                        label="Website URL"
                        name="websiteURL"
                        className="form-field"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="form-group">
                      <FormikControl
                        control="input"
                        type="text"
                        label="Sftp Location"
                        name="sftpLocation"
                        className="form-field"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="form-group">
                      <FormikControl
                        control="input"
                        type="text"
                        label="Download Path"
                        name="downloadPath"
                        className="form-field"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="form-group">
                      <FormikControl
                        control="input"
                        type="file"
                        label="Template"
                        name="template"
                        className="form-field"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}></Grid>

                  <Grid item xs={4}></Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained" 
                      color="error"
                      type="submit"
                      className="form-group form-field"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Box>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateConfigurationComponent;
