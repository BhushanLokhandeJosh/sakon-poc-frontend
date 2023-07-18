export const SUPER_ADMIN = "SUPERADMIN";
export const ADMIN = "ADMIN";

export interface IUserResponse {
  name: string;
  email: string;
  role: string;
  department: number[] | undefined;
  org: number | undefined;
}

export interface IUserFormProps {
  isOpen: boolean;
  toggleModal: () => void;
  onSubmit: (values: any) => void;
}
