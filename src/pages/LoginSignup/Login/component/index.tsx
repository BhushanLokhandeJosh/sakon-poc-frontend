import React from "react";
import "./styles/styles.css";
import { Form, Formik } from "formik";
import { IFormikProps, INPUT_TYPE } from "../../../../shared/types";
import { Button, Grid, InputLabel } from "@mui/material";
import * as Yup from "yup";
import Input from "../../../../shared/FormComponents/Input";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email Required"),
    password: Yup.string().required("Password Required"),
  });

  const onSubmitHandler = (values: any) => {
    console.log("Form Submitted", values);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitHandler}
      >
        {(formik: IFormikProps<any>) => {
          console.log(formik.values);
          return (
            <Form>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 2 }}
                className="grid-align-style"
              >
                <Grid item lg={9} md={8} sm={8} xs={12}>
                  <InputLabel sx={{ color: "black", marginLeft: "5rem" }}>
                    Email
                  </InputLabel>
                </Grid>
                <Grid item lg={9} md={8} sm={8} xs={12}>
                  <Input
                    type={INPUT_TYPE.TEXT}
                    name="email"
                    className="form-control-input"
                    placeholder="Email"
                    value={formik.values.email}
                  />
                </Grid>

                <Grid item lg={9} md={8} sm={8} xs={12}>
                  <InputLabel sx={{ color: "black", marginLeft: "5rem" }}>
                    Password
                  </InputLabel>
                </Grid>
                <Grid item lg={9} md={8} sm={8} xs={12}>
                  <Input
                    type={INPUT_TYPE.PASSWORD}
                    name="password"
                    className="form-control-input"
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
                    marginLeft: "27rem",
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

  // return (
  //   <div className="login-page">
  //
  //     <div className="login-form">
  //       <input
  //         type="email"
  //         placeholder="Email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //       <input
  //         type="password"
  //         placeholder="Password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //       <button onClick={handleLogin}>Log In</button>
  //     </div>
  //   </div>
  // );
};

export default LoginPage;
