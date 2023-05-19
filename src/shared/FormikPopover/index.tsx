import { Popover, Typography } from "@mui/material";
import { IFormikProps } from "../types";
import FormikContainer from "../FormikModalComponent/component/FormikContainer";

export interface IFormikModalProp {
  id: string;
  isOpen: boolean;
  anchorEl: any;
  handleClose: any;
  popoverTitle: string;
  submitButtonLabel?: string;
  onSubmit: (values: any) => void;
  getFormBody: (formik: any) => JSX.Element;
  initialValues: any;
  validationSchema: any;
  popoverClassName?: string;
  formClassName?: string;
  showResetButton: boolean;
  showCancelButton: boolean;
}

const FormikPopoverComponent = (props: IFormikModalProp) => {
  const {
    id,
    isOpen,
    anchorEl,
    handleClose,
    submitButtonLabel,
    popoverTitle,
    getFormBody,
    initialValues,
    validationSchema,
    onSubmit,
    popoverClassName,
    formClassName,
    showCancelButton,
    showResetButton,
  } = props;

  const handleReset = (formik: IFormikProps<any>) => {
    formik.resetForm();
  };

  return (
    <div className={popoverClassName}>
      <Popover
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography variant="h3">{popoverTitle}</Typography>
        <FormikContainer
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmitHandler={onSubmit}
          formClassName={formClassName}
          submitButtonLabel={submitButtonLabel}
          showResetButton={showResetButton}
          showCancelButton={showCancelButton}
          handleReset={handleReset}
          getFormikForm={(formik: IFormikProps<any>) => getFormBody(formik)}
        />
      </Popover>
    </div>
  );
};

FormikPopoverComponent.defaultProps = {
  showResetButton: false,
  showCancelButton: true,
  popoverTitle: "",
};

export default FormikPopoverComponent;
