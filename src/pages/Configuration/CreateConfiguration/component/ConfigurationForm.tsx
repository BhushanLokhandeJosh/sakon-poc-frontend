import { Form } from "formik";
import { Grid } from "@mui/material";

import { IConfiguration } from "../types";
import { IFormikProps } from "../../../../shared/types";

import "./styles/styles.css";

import Input from "../../../../shared/FormComponents/Input";

interface IConfigurationProps {
  formik: IFormikProps<IConfiguration>;
}

const ConfigurationForm = (props: IConfigurationProps): JSX.Element => {
  const {values} = props.formik;
  return (
    <Form encType="multipart/form-data">
      <Grid container rowSpacing={4} columnSpacing={{ xs: 4 }}>
        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type="text"
              label="Configuration Name"
              name="configurationName"
              className="input-field"
              value={values.configurationName}
            />
          </div>
        </Grid>

        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type="text"
              label="Carrier Name"
              name="carrierName"
              className="input-field"
              value={values.carrierName}
            />
          </div>
        </Grid>

        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type="text"
              label="Email"
              name="email"
              className="input-field"
              value={values.email}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type="password"
              label="Password"
              name="password"
              className="input-field"
              value={values.password}
            />
          </div>
        </Grid>

        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type="text"
              label="Department"
              name="department"
              className="input-field"
              value={values.department}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type="text"
              label="Sftp Location"
              name="sftpLocation"
              className="input-field"
              value={values.sftpLocation}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type="text"
              label="Sftp Login"
              name="sftpLogin"
              className="input-field"
              value={values.sftpLogin}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type="password"
              label="Sftp Password"
              name="sftpPassword"
              className="input-field"
              value={values.sftpPassword}
            />
          </div>
        </Grid>

        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type="text"
              label="Download Link"
              name="downloadPath"
              className="input-field"
              value={values.downloadPath}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type="file"
              label="Template"
              name="template"
              className="input-file-field"
              value={values.template}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default ConfigurationForm;
