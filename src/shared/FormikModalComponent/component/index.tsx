import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  PaperProps,
  SxProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import FormikContainer from "./FormikContainer";

import { IFormikProps, MAX_WIDTH } from "../../types";
import "./styles/styles.css";
import styled from "@emotion/styled";
import { useState } from "react";

export interface IFormikModalProp {
  isOpen: boolean;
  toggleModal: () => void;
  modalTitle: string;
  getFormBody: (formik: any) => JSX.Element;
  submitButtonLabel?: string;
  initialValues: any;
  validationSchema: any;
  onSubmit: (values: any) => void;
  //To Define the size of Material UI Modal,They have maxwidth property which
  //takes values like "xs", "sm", "md", "lg", "xl".
  maxwidth?: MAX_WIDTH;
  modalClassName?: string;
  formClassName?: string;
}

const FormikModalComponent = (props: IFormikModalProp) => {
  const [showRight, setShowRight] = useState<boolean>(false);
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
  } = props;

  const positionRight: SxProps = {
    "& .MuiDialog-container": {
      justifyContent: "flex-end",
      alignItems: "flex-start",
      margin: "10% 0% 0% 70%",
    },
  };

  return (
    <div className={modalClassName}>
      <Dialog
        open={isOpen}
        maxWidth={maxwidth}
        sx={showRight ? positionRight : {}}
      >
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
            getFormikForm={(formik: IFormikProps<any>) => getFormBody(formik)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormikModalComponent;
