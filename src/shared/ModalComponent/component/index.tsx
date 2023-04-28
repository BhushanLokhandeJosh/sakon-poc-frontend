import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";

import { CustomModalProp } from "../type";

import "./styles/styles.css";

const ModalComponent = (props: CustomModalProp) => {
  const { isOpen, toggleModal, modalBody, modalTitle,maxwidth } = props;

  return (
    <div>
      {isOpen && (
        <Dialog
          open={isOpen}
          maxWidth={maxwidth}
          sx={{ borderRadius: "20px",width:"100%",textAlign:"left" }}
        >
          <div className="modal-header">
          <DialogTitle
            sx={{
              fontSize:"25px",
              fontWeight:"bold",
              paddingLeft:"45px",
              color:"#5c5b5bf"
            }}
          >
            {modalTitle}
          </DialogTitle>
          <div className="close-modal" onClick={toggleModal}>X</div>
          </div>

          <DialogContent>
            <Box sx={{ width: "100%" }}>{modalBody}</Box>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ModalComponent;
