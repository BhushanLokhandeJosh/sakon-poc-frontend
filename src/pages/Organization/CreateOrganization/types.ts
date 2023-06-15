export interface IOrganization {
  name: string;
  department_count: 0;
  service_providers: string[];
}

export interface IOrganizationFormProps {
  isOpen: boolean;
  toggleModal: () => void;
  onSubmit: (values: any) => void;
}
