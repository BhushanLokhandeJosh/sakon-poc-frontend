import { Form, Formik } from "formik";

import { Box, Button, Grid } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import "./styles/style.css";

import { IProps } from "../constants";
import FormikControl from "../../../shared/FormikContainer/formikControl";

const ConfigurationForm = (props: IProps) => {
  const { initialValues, validationSchema, onSubmit, handleClose } = props;

  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <DialogContent>
              <Box sx={{ width: "100%" }}>
                <Form>
                  <Grid
                    container
                    rowSpacing={5}
                    columnSpacing={{ xs: 2, sm: 2, md: 2 }}
                  >
                    <Grid item xs={12}>
                      <div className="form-group">
                        <FormikControl
                          control="input"
                          type="text"
                          label="EMAIL"
                          name="email"
                          className="form-field"
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className="form-group">
                        <FormikControl
                          control="input"
                          type="password"
                          label="PASSWORD"
                          name="password"
                          className="form-field"
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className="form-group">
                        <FormikControl
                          control="input"
                          type="text"
                          label="CARRIER NAME"
                          name="carrierName"
                          className="form-field"
                        />
                      </div>
                    </Grid>

                    <Grid item xs={12}>
                      <div className="form-group">
                        <FormikControl
                          control="input"
                          type="text"
                          label="SFTP LOGIN"
                          name="sftpLogin"
                          className="form-field"
                        />
                      </div>
                    </Grid>

                    <Grid item xs={12}>
                      <div className="form-group">
                        <FormikControl
                          control="input"
                          type="password"
                          label="SFTP PASSWORD"
                          name="sftpPassword"
                          className="form-field"
                        />
                      </div>
                    </Grid>

                    <Grid item xs={12}>
                      <div className="form-group">
                        <FormikControl
                          control="input"
                          type="text"
                          label="SFTP LOCATION"
                          name="sftpLocation"
                          className="form-field"
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className="form-group">
                        <FormikControl
                          control="input"
                          type="text"
                          label="DOWNLOAD LINK"
                          name="downloadPath"
                          className="form-field"
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className="form-group">
                        <FormikControl
                          control="input"
                          type="file"
                          label="TEMPLATE"
                          name="template"
                          className="form-field"
                        />
                      </div>
                    </Grid>

                    <Grid item xs={12}>
                      <DialogActions>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          onClick={handleClose}
                        >
                          SUBMIT
                        </Button>
                        <Button
                          color="error"
                          variant="contained"
                          onClick={handleClose}
                        >
                          ERROR
                        </Button>
                      </DialogActions>
                    </Grid>
                  </Grid>
                </Form>
              </Box>
            </DialogContent>
          );
        }}
      </Formik>
    </div>
  );
};

export default ConfigurationForm;
