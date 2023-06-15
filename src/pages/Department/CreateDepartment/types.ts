export interface IDepartment {
  name: string;
  org: string;
}

export interface IDepartmentFormProps {
  isOpen: boolean;
  toggleModal: () => void;
  onSubmit: (values: any) => void;
}
