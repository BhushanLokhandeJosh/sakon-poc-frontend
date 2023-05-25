import { Popover, Typography, Button } from "@mui/material";

import { IFormikProps } from "../types";
import usePopover from "../CustomHooks/usePopover";

import "./styles/styles.css";

import FormikContainer from "../FormikModalComponent/component/FormikContainer";

export interface IFormikModalProp {
  popoverButtonTitle: string;
  popoverButtonIcon?: JSX.Element;
  popoverTitle: string;
  submitButtonLabel?: string;
  onSubmit: (values: any, handleClose: Function) => void;
  getFormBody: (formik: any) => JSX.Element;
  initialValues: any;
  //filter Box may not have validationSchema.
  validationSchema?: any;
  popoverClassName?: string;
  formClassName?: string;
  showResetButton: boolean;
  showCancelButton: boolean;
}

//TODO:We have to check this component with Column Popover component later,
// In order to avoid redundancy and enhancing functionality of custom shared
//popover component.

const FormikPopoverComponent = (props: IFormikModalProp) => {
  const {
    popoverButtonTitle,
    popoverButtonIcon,
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

  const { anchorEl, id, open, handleClick, handleClose } = usePopover();

  const handleReset = (formik: IFormikProps<any>) => {
    formik.resetForm();
  };

  return (
    <div className={popoverClassName}>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        {popoverButtonTitle}
        {popoverButtonIcon}
      </Button>

      {open && (
        <Popover
          id={id}
          open={open}
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
            onSubmitHandler={(values) => onSubmit(values, handleClose)}
            formClassName={formClassName}
            toggle={handleClose}
            submitButtonLabel={submitButtonLabel}
            showResetButton={showResetButton}
            showCancelButton={showCancelButton}
            handleReset={handleReset}
            getFormikForm={(formik: IFormikProps<any>) => getFormBody(formik)}
          />
        </Popover>
      )}
    </div>
  );
};

FormikPopoverComponent.defaultProps = {
  showResetButton: false,
  showCancelButton: true,
  popoverButtonTitle: "Open Popover",
  popoverTitle: "",
};

export default FormikPopoverComponent;
