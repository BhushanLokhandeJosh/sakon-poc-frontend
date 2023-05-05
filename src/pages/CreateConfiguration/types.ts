export interface IConfigurationValues {
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

export interface IConfigurationProps {
  toggleModal: () => void;
  onSubmit: (values: IConfigurationValues) => void;
}

export interface IConfigurationFormProps extends IConfigurationProps {
  isOpen: boolean;
}
