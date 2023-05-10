import { Form } from "formik";
import { Grid } from "@mui/material";

import Input from "../../../../shared/FormComponents/Input";

import { IConfiguration } from "../types";
import { IFormikProps } from "../../../../shared/types";

import "./styles/styles.css";

interface IConfigurationProps {
  formik: IFormikProps<IConfiguration>;
}

const ConfigurationForm = (props: IConfigurationProps): JSX.Element => {
  return (
    <>
      <Form>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
          <Grid item xs={12} sm={12} md={10} lg={6}>
            <div>
              <Input
                type="text"
                label="Configuration Name"
                name="configurationName"
                className="input-field"
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={10} lg={6}>
            <div>
              <Input
                type="text"
                label="Carrier Name"
                name="carrierName"
                className="input-field"
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={10} lg={6}>
            <div>
              <Input
                type="text"
                label="Email"
                name="email"
                className="input-field"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={6}>
            <div>
              <Input
                type="password"
                label="Password"
                name="password"
                className="input-field"
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={10} lg={6}>
            <div>
              <Input
                type="text"
                label="Department"
                name="department"
                className="input-field"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={6}>
            <div>
              <Input
                type="text"
                label="Sftp Location"
                name="sftpLocation"
                className="input-field"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={6}>
            <div>
              <Input
                type="text"
                label="Sftp Login"
                name="sftpLogin"
                className="input-field"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={6}>
            <div>
              <Input
                type="password"
                label="Sftp Password"
                name="sftpPassword"
                className="input-field"
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={10} lg={6}>
            <div>
              <Input
                type="text"
                label="Download Link"
                name="downloadPath"
                className="input-field"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={6}>
            <div>
              <Input
                type="file"
                label="Template"
                name="template"
                className="input-file-field"
              />
            </div>
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default ConfigurationForm;
