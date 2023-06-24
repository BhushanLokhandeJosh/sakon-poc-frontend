export interface ISignupPayload {
  id?: number;
  email: string;
  organization: string;
  department_count: number;
  designation: string;
  service_providers: string[];
}

export interface ISignUpModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  signupuser: ISignupPayload;
}
