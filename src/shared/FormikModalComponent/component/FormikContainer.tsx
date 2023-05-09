import React from "react";
import { Form, Formik } from "formik";
import { Button, DialogActions, Grid } from "@mui/material";
import { BUTTONS } from "../../constants";

interface IFormikProps {
  initialValues: any;
  validationSchema: any;
  onSubmitHandler: (values: any) => void;
  children: JSX.Element;
  formStyle?: any;
  toggleModal: () => void;
  submitButtonLabel?: string;
  getModalBody: (formik : any) => JSX.Element
}

const FormikContainer = (props: IFormikProps) => {
  const {
    initialValues,
    validationSchema,
    onSubmitHandler,
    // children,
    formStyle,
    toggleModal,
    submitButtonLabel = BUTTONS.SUBMIT,
    getModalBody
  } = props;

  return (
    <div className={formStyle}>
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
              {/* {React.cloneElement(children, { formValues: values })} */}

              {getModalBody(values)}

              <Grid item xs={11}>
                <DialogActions>
                  <div className="button-container">
                    <Button
                      type="reset"
                      variant="contained"
                      color="error"
                      onClick={toggleModal}
                    >
                      {BUTTONS.CANCEL}
                    </Button>
                    <Button type="submit" variant="contained">
                      {submitButtonLabel}
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
