import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import FormikContainer from "./FormikContainer";

import "./styles/styles.css";


export interface IFormikModalProp {
  isOpen: boolean;
  toggleModal: () => void;
  modalTitle: string;
  modalBody: JSX.Element;
  buttonLabel?: string;
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
  maxwidth?: "xs" | "sm" | "md" | "lg" | "xl";
  modalPosition?: string;
  FormikContainerStyle?: string;
}

const FormikModalComponent = (props: IFormikModalProp) => {
  const {
    isOpen,
    toggleModal,
    modalTitle,
    modalBody,
    maxwidth,
    buttonLabel,
    modalPosition,
    initialValues,
    validationSchema,
    onSubmit,
    FormikContainerStyle,
  } = props;

  return (
    <div className={modalPosition}>
      <Dialog open={isOpen} maxWidth={maxwidth || "md"}>
        <div className="modal-header">
          <DialogTitle className="modal-title">{modalTitle}</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={toggleModal}
            sx={{ position: "absolute", right: 30 }}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <DialogContent>
          <FormikContainer
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmitHandler={onSubmit}
            formikContainerStyle={FormikContainerStyle}
            toggleModal={toggleModal}
            buttonLabel={buttonLabel}
          >
            {modalBody}
          </FormikContainer>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormikModalComponent;
