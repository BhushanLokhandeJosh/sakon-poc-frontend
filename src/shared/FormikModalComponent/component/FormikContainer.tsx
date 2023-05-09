import { Button, DialogActions, Grid } from "@mui/material";
import { Form, Formik, FormikProps } from "formik";

import { BUTTONS } from "../../constants";

interface IFormikProps {
  initialValues: any;
  validationSchema: any;
  onSubmitHandler: (values: any) => void;
  formClassName?: string;
  toggleModal: () => void;
  submitButtonLabel?: string;
  formikForm: (formik: any) => JSX.Element;
}

const FormikContainer = (props: IFormikProps) => {
  const {
    initialValues,
    validationSchema,
    onSubmitHandler,
    formClassName,
    toggleModal,
    submitButtonLabel = BUTTONS.SUBMIT,
    formikForm,
  } = props;

  return (
    <div className={formClassName}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitHandler}
      >
        {(formik: FormikProps<any>) => (
          <Form>
            <Grid
              container
              rowSpacing={4}
              columnSpacing={{ xs: 2, sm: 2, md: 2 }}
            >
              {formikForm(formik)}

              <Grid item xs={11}>
                <DialogActions>
                  <div className="button-container">
                    <Button
                      type="reset"
                      variant="contained"
                      color="error"
                      onClick={toggleModal}
                      sx={{ textTransform: "capitalize" }}
                    >
                      {BUTTONS.CANCEL}
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ textTransform: "capitalize" }}
                    >
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
