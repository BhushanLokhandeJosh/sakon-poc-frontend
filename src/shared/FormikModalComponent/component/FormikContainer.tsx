import React from "react";
import { Form, Formik } from "formik";
import { Button, DialogActions, Grid } from "@mui/material";

interface IFormikProps {
  initialValues: any;
  validationSchema: any;
  onSubmitHandler: any;
  children: JSX.Element;
  formikContainerStyle: any;
  toggleModal: any;
  buttonLabel?: string;
}

const BUTTONS = {
  SUBMIT: "SUBMIT",
  CANCEL: "CANCEL",
};

const FormikContainer = (props: IFormikProps) => {
  const {
    initialValues,
    validationSchema,
    onSubmitHandler,
    children,
    formikContainerStyle,
    toggleModal,
    buttonLabel,
  } = props;

  return (
    <div className={formikContainerStyle}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitHandler}
      >
        {({ values }) => (
          <Form>
            <Grid
              container
              rowSpacing={4}
              columnSpacing={{ xs: 2, sm: 2, md: 2 }}
            >
              {React.cloneElement(children, { formValues: values })}

              <Grid item xs={11}>
                <DialogActions>
                  <div className="button-container">
                    <button
                      type="reset"
                      className="cancel-button"
                      onClick={toggleModal}
                    >
                      {BUTTONS.CANCEL}
                    </button>
                    <Button type="submit" variant="contained">
                      {buttonLabel?.toUpperCase() || BUTTONS.SUBMIT}
                    </Button>
                  </div>
                </DialogActions>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikContainer;
