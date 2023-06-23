import { Form } from "formik";
import { Grid, InputLabel } from "@mui/material";

import { ADMIN, IUserPayload, SUPER_ADMIN } from "../types";
import { IFormikProps, INPUT_TYPE } from "../../../../shared/types";

import "./styles/styles.css";

import Input from "../../../../shared/FormComponents/Input";
import Select from "../../../../shared/FormComponents/Select";

interface IOrganizationProps {
  formik: IFormikProps<IUserPayload>;
  departmentOptions?: { label: string; value: string }[];
  organizationsOptions?: { label: number; value: string }[];
  isEdit: boolean;
}

const UserForm = (props: IOrganizationProps): JSX.Element => {
  const { values } = props.formik;
  const { departmentOptions, organizationsOptions, isEdit } = props;

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

        {!isEdit && (
          <>
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
          </>
        )}

        {values.role === ADMIN && (
          <>
            <Grid item lg={3} md={4} sm={5} xs={12}>
              <InputLabel sx={{ color: "black" }}>Department</InputLabel>
            </Grid>
            <Grid item lg={9} md={8} sm={8} xs={12}>
              <div>
                <Select
                  name="Department"
                  placeholder="Select Department"
                  options={departmentOptions}
                  className="multiselect-style"
                  menuPlacement="bottom"
                  maxMenuHeight={80}
                  isMulti={true}
                />
              </div>
            </Grid>
          </>
        )}

        {values.role === SUPER_ADMIN && (
          <>
            <Grid item lg={3} md={4} sm={5} xs={12}>
              <InputLabel sx={{ color: "black" }}>Organizations</InputLabel>
            </Grid>
            <Grid item lg={9} md={8} sm={8} xs={12}>
              <div>
                <Select
                  name="org"
                  placeholder="Select Organization"
                  options={organizationsOptions}
                  className="multiselect-style"
                  menuPlacement="bottom"
                  maxMenuHeight={80}
                  isMulti={false}
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
