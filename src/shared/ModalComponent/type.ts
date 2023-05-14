export interface CustomModalProp {
  isOpen: boolean;
  toggleModal: () => void;
  modalBody: JSX.Element;
  modalTitle?: string;
  label?: string;
  maxwidth?: any;
  modalStyle?: string;
}
