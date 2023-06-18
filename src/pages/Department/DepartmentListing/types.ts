export interface IDepartmentPayload {
  id?: number;
  name: string;
  org: string;
}

export interface IDepartmentFormProps {
  isOpen: boolean;
  toggleModal: () => void;
  department: IDepartmentPayload;
  // onSubmit: (values: any) => void;
}
