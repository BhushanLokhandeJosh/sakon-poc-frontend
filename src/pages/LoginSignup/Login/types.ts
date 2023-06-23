export interface IOrganizationPayload {
  id: number;
  name: string;
  department_count: 0;
  service_providers: string[];
}

interface modalPropsTypes {
  isOpen: boolean;
  toggleModal: () => void;
}

export interface IOrganizationFormProps extends modalPropsTypes {
  onSubmit: (values: IOrganizationPayload) => void;
}

export interface IOrganizationModalProps extends modalPropsTypes {
  isOpen: boolean;
  toggleModal: () => void;
  organization: IOrganizationPayload;
}
