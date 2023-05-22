import { Popover, Typography, Button } from "@mui/material";

import { IFormikProps } from "../types";

import "./styles/styles.css";

import FormikContainer from "../FormikModalComponent/component/FormikContainer";

export interface IFormikModalProp {
  id: string;
  isOpen: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
  popoverButtonClassName: string;
  popoverButtonTitle: string;
  popoverButtonIcon?: any;
  popoverClassName?: string;
  popoverTitle: string;
  submitButtonLabel?: string;
  onSubmit: (values: any) => void;
  getFormBody: (formik: any) => JSX.Element;
  initialValues: any;
  //filter Box may not have validationSchema.
  validationSchema?: any;
  formClassName?: string;
  showResetButton: boolean;
  showCancelButton: boolean;
}

// TODO:We have to check this component with Column Popover component later,
// In order to avoid redundancy and enhancing functionality of custom shared
// popover component.

const FormikPopoverComponent = (props: IFormikModalProp) => {
  const {
    id,
    isOpen,
    anchorEl,
    handleClick,
    handleClose,
    popoverButtonTitle,
    popoverButtonIcon,
    popoverButtonClassName,
    submitButtonLabel,
    popoverTitle,
    getFormBody,
    initialValues,
    validationSchema,
    onSubmit,
    popoverClassName,
    formClassName,
    showResetButton,
    showCancelButton,
  } = props;

  const handleReset = (formik: IFormikProps<any>) => {
    formik.resetForm();
  };

  return (
    <div className={popoverClassName}>
      <div className={popoverButtonClassName}>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          {popoverButtonTitle}
          {popoverButtonIcon}
        </Button>
      </div>

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
        <Typography
          variant="h5"
          sx={{ margin: "1% 0% 1% 1%", fontWeight: "bold" }}
        >
          {popoverTitle}
        </Typography>
        <FormikContainer
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmitHandler={onSubmit}
          formClassName={formClassName}
          toggle={handleClose}
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
  popoverButtonTitle: "Open Popover",
  popoverButtonClassName: "popover-button-style",
  popoverTitle: "",
};

export default FormikPopoverComponent;
