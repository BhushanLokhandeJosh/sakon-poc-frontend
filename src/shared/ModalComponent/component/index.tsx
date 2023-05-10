import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./styles/styles.css";

export interface ICustomModalProp {
  isOpen: boolean;
  toggleModal: () => void;
  modalBody: JSX.Element;
  modalTitle: string;
  label?: string;
  maxwidth?: any;
  modalPosition?: string;
}

const ModalComponent = (props: ICustomModalProp) => {
  const {
    isOpen,
    toggleModal,
    modalBody,
    modalTitle,
    maxwidth,
    modalPosition,
  } = props;

  return (
    <div className={modalPosition}>
      <Dialog open={isOpen} maxWidth={maxwidth}>
        <div className="modal-header">
          <DialogTitle sx={{ fontWeight: "bold" }}>{modalTitle}</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={toggleModal}
            sx={{ position: "absolute", right: 30 }}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <DialogContent>
          <Box>{modalBody}</Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalComponent;
