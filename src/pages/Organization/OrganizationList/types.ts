export interface IServiceProvidersPayload {
  id?: number;
  name: string;
  url: string;
}

export interface IServiceProvidersProps {
  isOpen: boolean;
  toggleModal: () => void;
  serviceProvider: IServiceProvidersPayload;
}
