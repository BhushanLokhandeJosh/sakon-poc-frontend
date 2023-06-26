export interface IDepartmentPayload {
  id?: number;
  name: string;
  org: number | undefined;
}

export interface IDepartmentFormProps {
  isOpen: boolean;
  toggleModal: () => void;
  department: IDepartmentPayload;
  // onSubmit: (values: any) => void;
}
