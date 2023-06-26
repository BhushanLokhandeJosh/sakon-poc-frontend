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
  loggedInUser: any;
}

const UserForm = (props: IOrganizationProps): JSX.Element => {
  const { values } = props.formik;
  const { departmentOptions, organizationsOptions, isEdit, loggedInUser } =
    props;
  console.log("UserForm", loggedInUser);

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
              className="text-input"
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
              className="text-input"
              value={values.email}
            />
          </div>
        </Grid>

        {loggedInUser?.type === ADMIN && (
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
                  className="select-input"
                  menuPlacement="bottom"
                  maxMenuHeight={80}
                  isMulti={true}
                />
              </div>
            </Grid>
          </>
        )}

        {loggedInUser?.type === SUPER_ADMIN && (
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
                  className="select-input"
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
