export const SUPER_ADMIN = "SUPERADMIN";
export const ADMIN = "ADMIN";
export const USER = "USER";

export interface IUserPayload {
  id?: number;
  name: string;
  email: string;
  Department: number[];
  org: number;
}

export interface IUserFormProps {
  isOpen: boolean;
  toggleModal: () => void;
  onSubmit: (values: any) => void;
}
