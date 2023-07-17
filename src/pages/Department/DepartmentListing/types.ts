export interface IDepartmentPayload {
  id?: number;
  name: string;
  org: number | null;
}

export interface IDepartmentFormProps {
  isOpen: boolean;
  toggleModal: () => void;
  department: IDepartmentPayload;
}
