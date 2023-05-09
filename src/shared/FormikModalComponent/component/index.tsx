import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import FormikContainer from "./FormikContainer";

import "./styles/styles.css";
import { MAX_WIDTH } from "../../types";


export interface IFormikModalProp {
  isOpen: boolean;
  toggleModal: () => void;
  modalTitle: string;
  modalBody: JSX.Element;
  submitButtonLabel?: string;
  initialValues: any;
  validationSchema: any;
  onSubmit: (values:any) => void;
  //To Define the size of Material UI Modal,They have maxwidth property which
  //takes values like "xs", "sm", "md", "lg", "xl".
  maxwidth?: MAX_WIDTH;
  modalPosition?: string;
  className?: string;
}

const FormikModalComponent = (props: IFormikModalProp) => {
  const {
    isOpen,
    toggleModal,
    modalTitle,
    modalBody,
    //Default props value is MD which is "md".
    maxwidth = MAX_WIDTH.MD,
    submitButtonLabel,
    modalPosition,
    initialValues,
    validationSchema,
    onSubmit,
    className,
  } = props;

  const ModalBody = (formik:any) => modalBody;

  return (
    <div className={modalPosition}>
      <Dialog open={isOpen} maxWidth={maxwidth}>
        <div className="modal-header">
          <DialogTitle>{modalTitle}</DialogTitle>
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
            formStyle={className}
            toggleModal={toggleModal}
            submitButtonLabel={submitButtonLabel}
            getModalBody={(formik:any) => <ModalBody formik={formik} />}
          >
            {modalBody}
          </FormikContainer>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormikModalComponent;
