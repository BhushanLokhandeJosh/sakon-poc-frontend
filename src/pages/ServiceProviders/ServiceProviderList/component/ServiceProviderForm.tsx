import { Form } from "formik";
import { Grid, InputLabel } from "@mui/material";

import { IFormikProps, INPUT_TYPE } from "../../../../shared/types";

import "./styles/styles.css";

import Input from "../../../../shared/FormComponents/Input";
import { IServiceProvidersPayload } from "../types";

interface IServiceProvidersProps {
  formik: IFormikProps<IServiceProvidersPayload>;
}

const ServiceProviderForm = (props: IServiceProvidersProps): JSX.Element => {
  const { values } = props.formik;

  return (
    <Form>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 2 }}
        className="grid-align-style"
      >
        <Grid item lg={3} md={4} sm={5} xs={12}>
          <InputLabel sx={{ color: "black" }}>Service Provider</InputLabel>
        </Grid>
        <Grid item lg={9} md={8} sm={8} xs={12}>
          <div>
            <Input
              type={INPUT_TYPE.TEXT}
              placeholder="Service Provider Name"
              name="name"
              className="form-control-input"
              value={values.name}
            />
          </div>
        </Grid>

        <Grid item lg={3} md={4} sm={5} xs={12}>
          <InputLabel sx={{ color: "black" }}>Website URL</InputLabel>
        </Grid>
        <Grid item lg={9} md={8} sm={8} xs={12}>
          <div>
            <Input
              type={INPUT_TYPE.TEXT}
              placeholder="Website Url"
              name="url"
              className="form-control-input"
              value={values.url}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default ServiceProviderForm;
