import React from "react";
import "./styles/styles.css";
import { Form, Formik } from "formik";
import { IFormikProps, INPUT_TYPE } from "../../../../shared/types";
import { Button, Grid, InputLabel } from "@mui/material";

import Input from "../../../../shared/FormComponents/Input";
import { initialLoginValues } from "../constant";
import { loginValidationSchema } from "../helpers";

const LoginForm = (props: any) => {
  const { onSubmitHandler } = props;

  return (
    <div className="login-page">
      <Grid item lg={9} md={8} sm={8} xs={12}>
        <InputLabel style={{ color: "#565a59", fontSize: "3rem", fontWeight: "300" }}>
          Login
        </InputLabel>
      </Grid>
      <Formik
        initialValues={initialLoginValues}
        validationSchema={loginValidationSchema}
        onSubmit={onSubmitHandler}
      >
        {(formik: IFormikProps<any>) => {
          return (
            <Form>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 2 }}
                className="grid-align-style"
              >
                <Grid item lg={9} md={8} sm={8} xs={12}>
                  <InputLabel sx={{ color: "black" }}>Email</InputLabel>
                </Grid>
                <Grid item lg={9} md={8} sm={8} xs={12}>
                  <Input
                    type={INPUT_TYPE.EMAIL}
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formik.values.email}
                  />
                </Grid>

                <Grid item lg={9} md={8} sm={8} xs={12}>
                  <InputLabel sx={{ color: "black" }}>Password</InputLabel>
                </Grid>
                <Grid item lg={9} md={8} sm={8} xs={12}>
                  <Input
                    type={INPUT_TYPE.PASSWORD}
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={formik.values.password}
                  />
                </Grid>
              </Grid>

              <Grid item lg={9} md={8} sm={8} xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                     textTransform: "capitalize",
                     display: "flex",
                     marginLeft: "18rem",
                     marginTop: "1rem",
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
