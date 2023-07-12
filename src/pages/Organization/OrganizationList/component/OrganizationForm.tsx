import { Form } from "formik";
import { Grid, InputLabel } from "@mui/material";

import { IOrganizationPayload } from "../types";
import { IFormikProps, INPUT_TYPE, IOption } from "../../../../shared/types";

import "./styles/styles.css";

import Input from "../../../../shared/FormComponents/Input";
import Select from "../../../../shared/FormComponents/Select";

interface IOrganizationProps {
  serviceProviders?: IOption<String>[];
  formik: IFormikProps<IOrganizationPayload>;
}

const OrganizationForm = (props: IOrganizationProps): JSX.Element => {
  const { values } = props.formik;
  const { serviceProviders } = props;

  return (
    <Form>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 2 }}
        className="grid-align-style"
      >
        <Grid item lg={3} md={4} sm={5} xs={12}>
          <InputLabel sx={{ color: "black" }}>Organization</InputLabel>
        </Grid>
        <Grid item lg={9} sm={8} xs={12}>
          <div>
            <Input
              type={INPUT_TYPE.TEXT}
              placeholder="Organization Name"
              name="name"
              className="form-input"
              value={values.name}
            />
          </div>
        </Grid>

        <Grid item lg={3} md={4} sm={5} xs={12}>
          <InputLabel sx={{ color: "black" }}>Department Count</InputLabel>
        </Grid>
        <Grid item lg={9} sm={8} xs={12}>
          <div>
            <Input
              type={INPUT_TYPE.NUMBER}
              name="department_count"
              className="form-input"
              value={values.department_count}
            />
          </div>
        </Grid>

        <Grid item lg={3} md={4} sm={5} xs={12}>
          <InputLabel sx={{ color: "black" }}>Service Providers</InputLabel>
        </Grid>
        <Grid item lg={9} sm={8} xs={12}>
          <Select
            name="service_providers"
            placeholder="Select Service Providers"
            options={serviceProviders}
            className="multiselect"
            menuPlacement="bottom"
            maxMenuHeight={80}
            isMulti={true}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default OrganizationForm;
