import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";

import { CustomModalProp } from "../type";

import "./styles/styles.css";

const ModalComponent = (props: CustomModalProp) => {
  const { isOpen, toggleModal, modalBody, modalTitle, maxwidth, modalStyle } =
    props;

  return (
    <div className={modalStyle}>
      <Dialog open={isOpen} maxWidth={maxwidth}>
        <div className="modal-header">
          <DialogTitle className="modal-title">{modalTitle}</DialogTitle>
          <div className="close-modal" onClick={toggleModal}>
            X
          </div>
        </div>

        <DialogContent>
          <Box>{modalBody}</Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalComponent;
