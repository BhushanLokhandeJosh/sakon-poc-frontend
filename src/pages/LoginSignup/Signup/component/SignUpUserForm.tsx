import { Form } from "formik";
import { Grid, InputLabel } from "@mui/material";

import { ISignupPayload } from "../types";
import { IFormikProps, INPUT_TYPE } from "../../../../shared/types";

import "./styles/styles.css";

import Input from "../../../../shared/FormComponents/Input";
import Select from "../../../../shared/FormComponents/Select";

interface IOrganizationProps {
  serviceProviders?: { label: string; value: string }[];
  formik: IFormikProps<ISignupPayload>;
}

const SignUpUserForm = (props: IOrganizationProps): JSX.Element => {
  const { values } = props.formik;
  const { serviceProviders } = props;
  console.log(values, "values");
  console.log(serviceProviders, "serviceProviders");

  return (
    <Form>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 2 }}
        className="grid-align-style"
      >
        <Grid item lg={3} md={4} sm={5} xs={12}>
          <InputLabel sx={{ color: "black" }}>Email</InputLabel>
        </Grid>
        <Grid item lg={9} md={8} sm={8} xs={12}>
          <div>
            <Input
              type={INPUT_TYPE.EMAIL}
              placeholder="Email"
              name="email"
              className="form-control-input"
              value={values.email}
            />
          </div>
        </Grid>

        <Grid item lg={3} md={4} sm={5} xs={12}>
          <InputLabel sx={{ color: "black" }}>Organization</InputLabel>
        </Grid>
        <Grid item lg={9} md={8} sm={8} xs={12}>
          <div>
            <Input
              type={INPUT_TYPE.TEXT}
              placeholder="Organization Name"
              name="organization"
              className="form-control-input"
              value={values.organization}
            />
          </div>
        </Grid>

        <Grid item lg={3} md={4} sm={5} xs={12}>
          <InputLabel sx={{ color: "black" }}>Department Count</InputLabel>
        </Grid>
        <Grid item lg={9} md={8} sm={8} xs={12}>
          <div>
            <Input
              type={INPUT_TYPE.NUMBER}
              name="department_count"
              className="form-control-input"
              value={values.department_count}
            />
          </div>
        </Grid>

        <Grid item lg={3} md={4} sm={5} xs={12}>
          <InputLabel sx={{ color: "black" }}>Designation</InputLabel>
        </Grid>
        <Grid item lg={9} md={8} sm={8} xs={12}>
          <div>
            <Input
              type={INPUT_TYPE.TEXT}
              placeholder="Designation"
              name="designation"
              className="form-control-input"
              value={values.designation}
            />
          </div>
        </Grid>

        <Grid item lg={3} md={4} sm={5} xs={12}>
          <InputLabel sx={{ color: "black" }}>Service Providers</InputLabel>
        </Grid>
        <Grid item lg={9} md={8} sm={8} xs={12}>
          <Select
            name="service_providers"
            placeholder="Select Service Providers"
            options={serviceProviders}
            className="multiselect-style"
            menuPlacement="bottom"
            maxMenuHeight={80}
            isMulti={true}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default SignUpUserForm;
