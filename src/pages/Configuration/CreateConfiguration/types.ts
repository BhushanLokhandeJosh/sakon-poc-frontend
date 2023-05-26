export interface IConfiguration {
  configurationName: string;
  department: string;
  email: string;
  password: string;
  carrierName: string;
  sftpLogin: string;
  sftpPassword: string;
  sftpLocation: string;
  downloadPath: string;
  template: string | Blob;
}

export interface IConfigurationFormProps {
  toggleModal: () => void;
  onSubmit: (values: IConfiguration) => void;
  isOpen: boolean;
}

