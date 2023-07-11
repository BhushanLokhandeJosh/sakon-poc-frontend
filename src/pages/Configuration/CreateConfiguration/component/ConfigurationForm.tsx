import { Form } from "formik";
import { Grid } from "@mui/material";

import { IConfiguration } from "../types";
import { IFormikProps, INPUT_TYPE } from "../../../../shared/types";

import "./styles/styles.css";

import Input from "../../../../shared/FormComponents/Input";
import Select from "../../../../shared/FormComponents/Select";

interface IConfigurationProps {
  formik: IFormikProps<IConfiguration>;
  selectDepartmentOptions: { label: string; value: string }[];
}

const ConfigurationForm = (props: IConfigurationProps): JSX.Element => {
  const { values, setFieldValue } = props.formik;
  const { selectDepartmentOptions } = props;

  console.log("In Form")

  console.log("selectDepartmentOptions",selectDepartmentOptions);

  return (
    <Form>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 4 }}>
        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type={INPUT_TYPE.TEXT}
              label="Configuration Name"
              name="configurationName"
              className="input-field-config"
              value={values.configurationName}
            />
          </div>
        </Grid>

        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type={INPUT_TYPE.TEXT}
              label="Carrier Name"
              name="carrierName"
              className="input-field-config"
              value={values.carrierName}
            />
          </div>
        </Grid>

        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type={INPUT_TYPE.TEXT}
              label="Email"
              name="email"
              className="input-field-config"
              value={values.email}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type={INPUT_TYPE.PASSWORD}
              label="Password"
              name="password"
              className="input-field-config"
              value={values.password}
            />
          </div>
        </Grid>

        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Select
              name="department"
              label="Department"
              options={selectDepartmentOptions}
              placeholder="Select Department"
              className="select-field-config"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type={INPUT_TYPE.TEXT}
              label="Sftp Location"
              name="sftpLocation"
              className="input-field-config"
              value={values.sftpLocation}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type={INPUT_TYPE.TEXT}
              label="Sftp Login"
              name="sftpLogin"
              className="input-field-config"
              value={values.sftpLogin}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type={INPUT_TYPE.PASSWORD}
              label="Sftp Password"
              name="sftpPassword"
              className="input-field-config"
              value={values.sftpPassword}
            />
          </div>
        </Grid>

        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type={INPUT_TYPE.TEXT}
              label="Download Link"
              name="downloadPath"
              className="input-field-config"
              value={values.downloadPath}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={10} lg={6}>
          <div>
            <Input
              type={INPUT_TYPE.FILE}
              label="Template"
              name="template"
              className="input-file-field"
              value={values.template}
              formikSetFieldValue={setFieldValue}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default ConfigurationForm;
