import { Form, Formik } from "formik";
import { Button, Grid } from "@mui/material";
import { BUTTONS_LABLES } from "../../constants";

import { IFormikProps } from "../../types";

interface IFormikFormProps {
  initialValues: any;
  validationSchema: any;
  onSubmitHandler: (values: any) => void;
  formClassName?: string;
  toggleModal: () => void;
  submitButtonLabel?: string;
  getFormikForm: (formik: IFormikProps<any>) => JSX.Element;
  handleReset: (formik: IFormikProps<any>) => void;
  showResetButton: boolean;
  showCancelButton: boolean;
}

const FormikContainer = (props: IFormikFormProps) => {
  const {
    initialValues,
    validationSchema,
    onSubmitHandler,
    formClassName,
    toggleModal,
    submitButtonLabel,
    getFormikForm,
    handleReset,
    showResetButton,
    showCancelButton,
  } = props;

  return (
    <div className={`${formClassName} form-container`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitHandler}
      >
        {(formik: IFormikProps<any>) => (
          <Form>
            <Grid
              container
              rowSpacing={4}
              columnSpacing={{ xs: 2, sm: 2, md: 2 }}
            >
              {getFormikForm(formik)}

              <Grid item sm={11} lg={12}>
                <div className="button-container">
                  <Button
                    type="reset"
                    variant="contained"
                    color="error"
                    onClick={toggleModal}
                    sx={{ textTransform: "capitalize", marginRight: "2%" }}
                  >
                    {BUTTONS_LABLES.CANCEL}
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {submitButtonLabel}
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

FormikContainer.defaultProps = {
  submitButtonLabel: BUTTONSLABLES.SUBMIT,
};

export default FormikContainer;
