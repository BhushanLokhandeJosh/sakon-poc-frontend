import { Form } from "formik";
import { Grid, InputLabel } from "@mui/material";

import { IDepartmentPayload } from "../types";
import { IFormikProps, INPUT_TYPE } from "../../../../shared/types";

import "./styles/styles.css";

import Input from "../../../../shared/FormComponents/Input";

interface IDepartmentProps {
  formik: IFormikProps<IDepartmentPayload>;
}

const DepartmentForm = (props: IDepartmentProps): JSX.Element => {
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
          <InputLabel sx={{ color: "black" }}>Department</InputLabel>
        </Grid>
        <Grid item lg={9} md={8} sm={8} xs={12}>
          <div>
            <Input
              type={INPUT_TYPE.TEXT}
              placeholder="Dept Name"
              name="name"
              className="form-control-input"
              value={values.name}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default DepartmentForm;
