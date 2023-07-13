export interface IOrganizationPayload {
  id?: number;
  name: string;
  department_count: 0;
  service_providers: string[];
}

interface IOrganizationModalPropsTypes {
  isOpen: boolean;
  toggleModal: () => void;
}

export interface IOrganizationFormProps extends IOrganizationModalPropsTypes {
  onSubmit: (values: IOrganizationPayload) => void;
}

export interface IOrganizationModalProps extends IOrganizationModalPropsTypes {
  organization: IOrganizationPayload;
}
