import { Form } from "formik";
import { Grid, InputLabel } from "@mui/material";

import { ADMIN, IUserPayload, SUPER_ADMIN } from "../types";
import { IFormikProps, INPUT_TYPE } from "../../../../shared/types";

import "./styles/styles.css";

import Input from "../../../../shared/FormComponents/Input";

interface IOrganizationProps {
  formik: IFormikProps<IUserPayload>;
}

const UserForm = (props: IOrganizationProps): JSX.Element => {
  const { values } = props.formik;
  console.log(values);

  return (
    <Form>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 2 }}
        className="grid-align-style"
      >
        <Grid item lg={3} md={4} sm={5} xs={12}>
          <InputLabel sx={{ color: "black" }}>Name</InputLabel>
        </Grid>
        <Grid item lg={9} md={8} sm={8} xs={12}>
          <div>
            <Input
              type={INPUT_TYPE.TEXT}
              placeholder="Enter Name"
              name="name"
              className="form-control-input"
              value={values.name}
            />
          </div>
        </Grid>

        <Grid item lg={3} md={4} sm={5} xs={12}>
          <InputLabel sx={{ color: "black" }}>Email</InputLabel>
        </Grid>
        <Grid item lg={9} md={8} sm={8} xs={12}>
          <div>
            <Input
              type={INPUT_TYPE.EMAIL}
              placeholder="Enter Name"
              name="email"
              className="form-control-input"
              value={values.email}
            />
          </div>
        </Grid>

        <Grid item lg={3} md={4} sm={5} xs={12}>
          <InputLabel sx={{ color: "black" }}>Role</InputLabel>
        </Grid>
        <Grid item lg={9} md={8} sm={8} xs={12}>
          <div>
            <Input
              type={INPUT_TYPE.TEXT}
              placeholder="Enter Name"
              name="role"
              className="form-control-input"
              value={values.role}
            />
          </div>
        </Grid>

        {values.role === ADMIN && (
          <>
            <Grid item lg={3} md={4} sm={5} xs={12}>
              <InputLabel sx={{ color: "black" }}>Department</InputLabel>
            </Grid>
            <Grid item lg={9} md={8} sm={8} xs={12}>
              <div>
                <Input
                  type={INPUT_TYPE.TEXT}
                  placeholder="Enter Department"
                  name="department"
                  className="form-control-input"
                  value={values.department}
                />
              </div>
            </Grid>
          </>
        )}

        {values.role === SUPER_ADMIN && (
          <>
            <Grid item lg={3} md={4} sm={5} xs={12}>
              <InputLabel sx={{ color: "black" }}>Organization</InputLabel>
            </Grid>
            <Grid item lg={9} md={8} sm={8} xs={12}>
              <div>
                <Input
                  type={INPUT_TYPE.TEXT}
                  name="org"
                  className="form-control-input"
                  value={values.org}
                />
              </div>
            </Grid>
          </>
        )}
      </Grid>
    </Form>
  );
};

export default UserForm;
