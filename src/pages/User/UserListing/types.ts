export const SUPER_ADMIN = "SUPERADMIN";
export const ADMIN = "ADMIN";

export interface IUserPayload {
  id?: number;
  name: string;
  email: string;
  role: string;
  Department: number[];
  org: number;
}

export interface IUserFormProps {
  isOpen: boolean;
  toggleModal: () => void;
  onSubmit: (values: any) => void;
}
