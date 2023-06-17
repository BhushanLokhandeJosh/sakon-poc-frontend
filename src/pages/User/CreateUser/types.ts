export const SUPER_ADMIN = "SUPERADMIN";
export const ADMIN = "ADMIN";

export interface IUser {
  name: string;
  email: string;
  role: string;
  department: string;
  org: string;
}

export interface IUserFormProps {
  isOpen: boolean;
  toggleModal: () => void;
  onSubmit: (values: any) => void;
}
