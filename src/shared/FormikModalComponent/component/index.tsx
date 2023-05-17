import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import FormikContainer from "./FormikContainer";

import { IFormikProps, MAX_WIDTH } from "../../types";
import "./styles/styles.css";
import { FormikHelpers } from "formik";

export interface IFormikModalProp {
  isOpen: boolean;
  toggleModal: () => void;
  modalTitle: string;
  getFormBody: (formik: any) => JSX.Element;
  submitButtonLabel?: string;
  initialValues: any;
  validationSchema?: any;
  onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void;
  //To Define the size of Material UI Modal,They have maxwidth property which
  //takes values like "xs", "sm", "md", "lg", "xl".
  maxwidth?: MAX_WIDTH;
  modalClassName?: string;
  formClassName?: string;
  showResetButton: boolean;
  showCancelButton: boolean;
}

const FormikModalComponent = (props: IFormikModalProp) => {
  const {
    isOpen,
    toggleModal,
    modalTitle,
    getFormBody,
    //Default props value is MD which is "md".
    maxwidth = MAX_WIDTH.MD,
    submitButtonLabel,
    initialValues,
    validationSchema,
    onSubmit,
    modalClassName,
    formClassName,
    showResetButton,
    showCancelButton,
  } = props;

  const handleReset = (formik: IFormikProps<any>) => {
    formik.resetForm();
  };

  return (
    <div className={modalClassName}>
      <Dialog open={isOpen} maxWidth={maxwidth}>
        <div className="modal-header">
          <DialogTitle sx={{ fontWeight: "bold" }}>{modalTitle}</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={toggleModal}
            sx={{ position: "relative", right: 20 }}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <DialogContent>
          <FormikContainer
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmitHandler={onSubmit}
            formClassName={formClassName}
            toggleModal={toggleModal}
            submitButtonLabel={submitButtonLabel}
            showResetButton={showResetButton}
            showCancelButton={showCancelButton}
            getFormikForm={(formik: IFormikProps<any>) => getFormBody(formik)}
            handleReset={handleReset}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

FormikModalComponent.defaultProps = {
  showResetButton: false,
  showCancelButton: true,
  modalTitle: "",
};

export default FormikModalComponent;
