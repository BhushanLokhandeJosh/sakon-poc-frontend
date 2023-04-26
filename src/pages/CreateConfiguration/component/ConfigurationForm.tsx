import { Form, Formik } from "formik";
import { Button, Grid } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";

import Input from "../../../shared/FormComponents/Input";

import { initialValues, validationSchema } from "../helpers";
import { ConfigurationFormProps } from "../types";

import "./styles/styles.css";

const ConfigurationForm = (props: ConfigurationFormProps): JSX.Element => {
  const { onSubmit } = props;

  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          const handleReset = () => {
            formik.resetForm();
          };

          return (
            <Form>
              <Grid
                container
                rowSpacing={4}
                columnSpacing={{ xs: 4, sm: 4, md: 4 }}
              >
                <Grid item xs={6}>
                  <div className="form-group">
                    <Input
                      type="text"
                      label="Configuration Name"
                      name="configurationName"
                      className="text-field"
                    />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="form-group">
                    <Input
                      type="text"
                      label="Carrier Name"
                      name="carrierName"
                      className="text-field"
                    />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="form-group">
                    <Input
                      type="text"
                      label="Email"
                      name="email"
                      className="text-field"
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="form-group">
                    <Input
                      type="password"
                      label="Password"
                      name="password"
                      className="text-field"
                    />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="form-group">
                    <Input
                      type="text"
                      label="Department"
                      name="department"
                      className="text-field"
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="form-group">
                    <Input
                      type="text"
                      label="Sftp Location"
                      name="sftpLocation"
                      className="text-field"
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="form-group">
                    <Input
                      type="text"
                      label="Sftp Login"
                      name="sftpLogin"
                      className="text-field"
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="form-group">
                    <Input
                      type="password"
                      label="Sftp Password"
                      name="sftpPassword"
                      className="text-field"
                    />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="form-group">
                    <Input
                      type="text"
                      label="Download Link"
                      name="downloadPath"
                      className="text-field"
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="form-group">
                    <Input
                      type="file"
                      label="Template"
                      name="template"
                      className="text-field"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <DialogActions>
                    <Button
                      variant="contained"
                      type="submit"
                      className="submit-btn"
                      disabled={!formik.isValid || !formik.touched}
                    >
                      SUBMIT
                    </Button>
                    <button
                      onClick={handleReset}
                      className="cancel-button"
                    >
                      CANCEL
                    </button>
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

export default ConfigurationForm;
